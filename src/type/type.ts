import type { FunctionComponent, SVGProps } from 'react'

export type ISideNavbarItems = {
  id: number
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
  name: string
  path: string
  isBorder?: boolean
}

export type Property = {
  id: number
  name: string
  type: string
  status: string
}

export type Filters = {
  type: string
  status: string
}

export type FormState = {
  name: string
  type: string
  status: string
}

export type PropertyForm = {
  name: string
  type: string
  status: string
}
