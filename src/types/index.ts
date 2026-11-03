export interface EvBike {
  id: string
  brand: string
  model_name: string
  slug: string
  body_type: string
  ex_factory_price: number
  pave_subsidy_amount: number
  pave_net_price: number
  pave_eligible: boolean
  battery_type: string
  battery_voltage: number
  battery_amp_hours: number
  battery_kwh: number
  claimed_range_km: number
  real_road_range_km: number
  top_speed_kmh: number
  motor_wattage: number
  charge_time_hours: number
  charging_units_kwh: number
  cost_per_charge_pkr: number
  battery_warranty_months: number
  motor_warranty_months: number
  battery_replacement_cost_estimate: number
  image_url: string
  featured: boolean
  description: string
}

export interface LeadSubmission {
  model_id: string
  model_name: string
  full_name: string
  phone_whatsapp: string
  city: string
  payment_preference: 'Cash / Self-Finance' | 'PAVE 0% Bank Lease'
}
