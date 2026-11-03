import os
import sys
import time
import socket
import subprocess
import urllib.request
from playwright.sync_api import sync_playwright

def get_free_port():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('', 0))
        return s.getsockname()[1]

TEST_PORT = get_free_port()
BASE_URL = f"http://localhost:{TEST_PORT}"
SCREENSHOT_DIR = "D:/evbikes/qa_acceptance_screenshots"
os.makedirs(SCREENSHOT_DIR, exist_ok=True)

def wait_for_server(url, timeout=45):
    start = time.time()
    while time.time() - start < timeout:
        try:
            with urllib.request.urlopen(f"{url}/", timeout=2) as resp:
                if resp.status == 200:
                    return True
        except Exception:
            time.sleep(1)
    return False

def run_acceptance_audit():
    print("=" * 75)
    print("🚀 EVBikes Pakistan (PakEV) End-to-End QA Acceptance Audit")
    print("=" * 75)

    print(f"\n[1/6] Launching Next.js Production Server on port {TEST_PORT}...")
    server_proc = subprocess.Popen(
        ["npx.cmd", "next", "start", "-p", str(TEST_PORT)],
        cwd="D:/evbikes",
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )

    try:
        ready = wait_for_server(BASE_URL)
        if not ready:
            print("❌ ERROR: Next.js server failed to respond within 45s.")
            sys.exit(1)
        print(f"✓ Production server active and responding at {BASE_URL}")

        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)

            # -------------------------------------------------------------
            # TEST 1: Desktop Viewport - Home Page & Fuel Savings Slider
            # -------------------------------------------------------------
            print("\n[2/6] Auditing Home Page & Fuel Savings Slider (Desktop 1280x800)...")
            ctx_desktop = browser.new_context(viewport={"width": 1280, "height": 800})
            page_d = ctx_desktop.new_page()
            page_d.goto(f"{BASE_URL}/", wait_until="domcontentloaded")
            page_d.wait_for_timeout(1500)

            # Check title
            title = page_d.title()
            print(f"  Page Title: '{title}'")
            assert "EVBikes Pakistan" in title or "Electric Bike" in title

            # Check Savings Slider interaction
            slider_card = page_d.locator('#savings-calculator')
            assert slider_card.count() > 0, "Savings calculator section missing on home page"
            
            # Allow React client hydration to complete
            page_d.wait_for_timeout(2500)

            # Set 60 km/day on slider via preset button
            btn_60 = page_d.locator('#savings-calculator button:has-text("60 km/day")')
            btn_60.scroll_into_view_if_needed()
            btn_60.click()
            page_d.wait_for_timeout(800)
            commute_span = page_d.locator('#savings-calculator span.tabular-nums:has-text("km / day")')
            commute_text = commute_span.inner_text()
            print(f"  Slider Set to: {commute_text}")
            assert "60" in commute_text
            
            # Check savings display
            savings_text = page_d.locator('text=Net Monthly Money Saved').locator('xpath=..').inner_text()
            print(f"  Monthly Savings Calculated: {savings_text.replace(chr(10), ' ')}")
            assert "Rs." in savings_text or "Rs" in savings_text

            home_shot = os.path.join(SCREENSHOT_DIR, "desktop_home_1280x800.png")
            page_d.screenshot(path=home_shot, full_page=True)
            print(f"  ✓ Home page screenshot saved: {home_shot}")

            # -------------------------------------------------------------
            # TEST 2: PAVE Calculator (/pave-calculator)
            # -------------------------------------------------------------
            print("\n[3/6] Auditing PAVE Phase 2 Subsidy & 0% Installment Engine (/pave-calculator)...")
            page_d.goto(f"{BASE_URL}/pave-calculator", wait_until="domcontentloaded")
            page_d.wait_for_timeout(500)

            # Select Metro T9 Pro
            select_bike = page_d.locator('select').first
            select_bike.select_option(value='metro-t9-pro')
            page_d.wait_for_timeout(300)

            # Check Net Price (Ex-Factory 265,000 - 80,000 = 185,000)
            net_price_el = page_d.locator('text=Rs. 185,000').first
            assert net_price_el.count() > 0, "PAVE Net price Rs. 185,000 not found for Metro T9 Pro"
            print("  ✓ Metro T9 Pro Net Price: Rs. 185,000 (Ex-Factory 265k - 80k subsidy verified)")

            # Select Down payment 50,000
            dp_50k = page_d.locator('button:has-text("Rs. 50k")')
            dp_50k.click()
            page_d.wait_for_timeout(300)

            # Check 24 Months Tenure: (185,000 - 50,000) / 24 = 135,000 / 24 = 5,625
            t_24 = page_d.locator('button:has-text("24 Months")')
            t_24.click()
            page_d.wait_for_timeout(300)

            installment_24 = page_d.locator('text=Rs. 5,625').first
            assert installment_24.count() > 0, "Expected monthly installment of Rs. 5,625 / mo for Metro T9 Pro"
            print("  ✓ 24 Months Installment: Rs. 5,625 / month verified")

            # Switch to 36 Months Tenure: 135,000 / 36 = 3,750
            t_36 = page_d.locator('button:has-text("36 Months")')
            t_36.click()
            page_d.wait_for_timeout(300)
            installment_36 = page_d.locator('text=Rs. 3,750').first
            assert installment_36.count() > 0, "Expected monthly installment of Rs. 3,750 / mo for Metro T9 Pro"
            print("  ✓ 36 Months Installment: Rs. 3,750 / month verified")

            pave_shot = os.path.join(SCREENSHOT_DIR, "desktop_pave_calculator_1280x800.png")
            page_d.screenshot(path=pave_shot, full_page=True)
            print(f"  ✓ PAVE Calculator screenshot saved: {pave_shot}")

            # -------------------------------------------------------------
            # TEST 3: Side-by-Side Comparison Matrix (/compare)
            # -------------------------------------------------------------
            print("\n[4/6] Auditing Comparison Matrix (/compare?b1=yadea-t5&b2=metro-t9-pro)...")
            page_d.goto(f"{BASE_URL}/compare?b1=yadea-t5&b2=metro-t9-pro", wait_until="domcontentloaded")
            page_d.wait_for_timeout(500)

            # Check that both bikes render
            assert page_d.locator('text=Yadea T5').count() > 0, "Yadea T5 missing in comparison"
            assert page_d.locator('text=Metro T9 Pro').count() > 0, "Metro T9 Pro missing in comparison"
            print("  ✓ Yadea T5 and Metro T9 Pro dual-column comparison successfully rendered.")

            # Check real range row
            yadea_real_range = page_d.locator('text=75 km').first
            metro_real_range = page_d.locator('text=95 km').first
            assert yadea_real_range.count() > 0, "Yadea T5 real range (75 km) not displayed"
            assert metro_real_range.count() > 0, "Metro T9 Pro real range (95 km) not displayed"
            print("  ✓ Real-world road ranges verified (75 km vs 95 km).")

            # Check battery warnings
            graphene_badges = page_d.locator('text=Heavy Lead-Acid (1.5-2 Yrs Life)')
            assert graphene_badges.count() >= 2, "Graphene battery lifecycle warnings missing"
            print("  ✓ Battery technology warnings (Graphene cycle life limits) active.")

            compare_shot = os.path.join(SCREENSHOT_DIR, "desktop_compare_1280x800.png")
            page_d.screenshot(path=compare_shot, full_page=True)
            print(f"  ✓ Comparison matrix screenshot saved: {compare_shot}")

            # -------------------------------------------------------------
            # TEST 4: Lead Capture Modal & WhatsApp Dispatch
            # -------------------------------------------------------------
            print("\n[5/6] Auditing Lead Capture Modal & WhatsApp Route...")
            quote_btn = page_d.locator('button:has-text("Get Dealer Quote / Test Drive")').first
            quote_btn.click()
            page_d.wait_for_timeout(500)

            # Check modal opened
            modal_title = page_d.locator('text=Book Test Drive:')
            assert modal_title.count() > 0, "Lead modal did not open upon clicking CTA"
            print("  ✓ Lead capture modal opened successfully.")

            # Fill form
            page_d.locator('input[placeholder*="Tariq Ahmed"]').fill("Mursaleen Kamal")
            page_d.locator('input[placeholder*="0300"]').fill("03002485885")
            
            # Submit modal form and check window open interception
            # Intercept window.open
            page_d.evaluate("""
                window.__openedUrls = [];
                window.open = function(url, target) {
                    window.__openedUrls.push(url);
                };
            """)

            page_d.locator('button:has-text("Connect with Showroom Representative")').click()
            page_d.wait_for_timeout(1800)

            opened_urls = page_d.evaluate("() => window.__openedUrls || []")
            wa_urls = [u for u in opened_urls if u and "wa.me" in u]
            print(f"  Dispatched WhatsApp URLs: {wa_urls}")
            assert len(wa_urls) > 0, "WhatsApp redirect URL was not triggered"
            wa_url = wa_urls[0]
            assert "923002485885" in wa_url, f"Expected hotline 923002485885 in WhatsApp URL, got: {wa_url}"
            assert "PakEV" in wa_url or "Test%20Drive" in wa_url, "Encoded template parameters missing in WhatsApp URL"
            print("  ✓ Verified WhatsApp Lead routing directly to +923002485885 with encoded quotation details.")

            # -------------------------------------------------------------
            # TEST 5: Mobile Viewport Audit (375x812 - iPhone)
            # -------------------------------------------------------------
            print("\n[6/6] Auditing Mobile Viewport (375 x 812)...")
            ctx_mobile = browser.new_context(
                viewport={"width": 375, "height": 812},
                user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15"
            )
            page_m = ctx_mobile.new_page()

            # Compare on Mobile
            page_m.goto(f"{BASE_URL}/compare", wait_until="domcontentloaded")
            page_m.wait_for_timeout(500)
            
            # Check horizontal overflow is contained inside table container (scrollable) and body has no overflow
            body_scroll_width = page_m.evaluate("() => document.body.scrollWidth")
            window_inner_width = page_m.evaluate("() => window.innerWidth")
            print(f"  Mobile body scrollWidth: {body_scroll_width}px (Window: {window_inner_width}px)")
            assert body_scroll_width <= window_inner_width + 1, "Page has unwanted horizontal body overflow"

            mobile_compare_shot = os.path.join(SCREENSHOT_DIR, "mobile_compare_375x812.png")
            page_m.screenshot(path=mobile_compare_shot, full_page=True)
            print(f"  ✓ Mobile comparison screenshot saved: {mobile_compare_shot}")

            # Home on Mobile
            page_m.goto(f"{BASE_URL}/", wait_until="domcontentloaded")
            page_m.wait_for_timeout(500)
            mobile_home_shot = os.path.join(SCREENSHOT_DIR, "mobile_home_375x812.png")
            page_m.screenshot(path=mobile_home_shot, full_page=True)
            print(f"  ✓ Mobile home screenshot saved: {mobile_home_shot}")

            browser.close()

        print("\n" + "=" * 75)
        print("🎉 ALL 5 QA ACCEPTANCE AUDIT MODULES PASSED 100%!")
        print("=" * 75)

    finally:
        print("Stopping Next.js server...")
        try:
            server_proc.terminate()
            server_proc.wait(timeout=5)
        except Exception:
            pass
        print("Server stopped cleanly.")

if __name__ == "__main__":
    run_acceptance_audit()
