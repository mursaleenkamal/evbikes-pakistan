import bikesData from '../../data/ev_bikes_pakistan_2026.json'
import { EvBike } from '@/types'

export const EV_BIKES: EvBike[] = bikesData as EvBike[]

export function getAllBikes(): EvBike[] {
  return EV_BIKES
}

export function getBikeBySlug(slug: string): EvBike | undefined {
  return EV_BIKES.find((b) => b.slug.toLowerCase() === slug.toLowerCase())
}

export function getFeaturedBikes(): EvBike[] {
  return EV_BIKES.filter((b) => b.featured)
}

export function getBrands(): string[] {
  return Array.from(new Set(EV_BIKES.map((b) => b.brand)))
}
