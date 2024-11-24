import type { ChangeEvent } from 'react'

type PropertyFiltersProps = {
  filters: {
    type: string
    status: string
  }
  onFilterChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="mb-6 flex flex-wrap gap-4">
      <select name="type" value={filters.type} onChange={onFilterChange} className="rounded border p-2">
        <option value="">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="House">House</option>
        <option value="Commercial">Commercial</option>
      </select>
      <select name="status" value={filters.status} onChange={onFilterChange} className="rounded border p-2">
        <option value="">All Statuses</option>
        <option value="Available">Available</option>
        <option value="Rented">Rented</option>
      </select>
    </div>
  )
}

export default PropertyFilters
