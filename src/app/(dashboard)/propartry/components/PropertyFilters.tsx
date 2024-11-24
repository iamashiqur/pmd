"use client"
import type { ChangeEvent } from "react";
import React from 'react';

type PropertyFiltersProps = {
  filters: {
    type: string;
    status: string;
  };
  onFilterChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const PropertyFilters: React.FC<PropertyFiltersProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        name="type"
        value={filters.type}
        onChange={onFilterChange}
        className="p-2 border rounded"
      >
        <option value="">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="House">House</option>
        <option value="Commercial">Commercial</option>
      </select>
      <select
        name="status"
        value={filters.status}
        onChange={onFilterChange}
        className="p-2 border rounded"
      >
        <option value="">All Statuses</option>
        <option value="Available">Available</option>
        <option value="Rented">Rented</option>
      </select>
    </div>
  )
}

export default PropertyFilters
