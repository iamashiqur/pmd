import type { ISideNavbarItems, Property } from '@/type'
import { MapPinIcon } from '@heroicons/react/24/outline'

export const sideNavbar: ISideNavbarItems[] = [
  {
    id: 0,
    icon: MapPinIcon,
    name: 'Property Management',
    path: '/'
  }
]

export const initialProperties: Property[] = [
  { id: 1, name: 'Luxury Apartment', type: 'Apartment', status: 'Available' },
  { id: 2, name: 'Cozy House', type: 'House', status: 'Rented' }
]
