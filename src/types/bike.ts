export interface EVBike {
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

export interface EmiCalculation {
  downPayment: number
  tenureMonths: number
  principalAmount: number
  monthlyInstallment: number
  totalPayable: number
  markupRatePercent: number // 0% under PAVE
}

export interface FuelSavingsCalculation {
  dailyKm: number
  monthlyKm: number
  petrolPricePerLiter: number
  cd70MileageKmPerL: number
  monthlyPetrolCost: number
  electricityUnitRate: number
  monthlyEvCost: number
  monthlyNetSavings: number
  annualSavings: number
  paybackMonths: number
}

export interface LeadSubmission {
  modelId: string
  modelName: string
  fullName: string
  whatsapp: string
  city: string
  paymentPreference: 'cash' | 'pave_bank_lease'
  dealershipNote?: string
}
