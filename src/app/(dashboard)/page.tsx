"use client";
import Dropdown from "@/app/components/Dropdown";
import { initialProperties, type Filters, type FormState, type Property } from "@/type";
import { useState, type ChangeEvent } from "react";
import AddPropertyForm from "./propartry/components/AddPropertyForm ";
import CheckInCheckOut from "./propartry/components/CheckInCheckOut";
import PropertyFilters from "./propartry/components/PropertyFilters";
import PropertyList from "./propartry/components/PropertyList";

const Property = () => {
  const [properties, setProperties] = useState<Property[]>(initialProperties);
  const [filters, setFilters] = useState<Filters>({ type: "", status: "" });

  const [form, setForm] = useState<FormState>({
    name: "",
    type: "",
    status: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    type: "",
    status: "",
  });

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleAddProperty = () => {
    const newErrors = {
      name: form.name.trim() ? "" : "Name is required",
      type: form.type ? "" : "Type is required",
      status: form.status ? "" : "Status is required",
    };
    if (newErrors.name || newErrors.type || newErrors.status) {
      setErrors(newErrors);
      alert("Please fill in all required fields.");
      return;
    }
    setProperties([...properties, { id: Date.now(), ...form }]);
    setForm({ name: "", type: "", status: "" });
    setErrors({ name: "", type: "", status: "" });
  };

  const filteredProperties = properties.filter(
    (prop) =>
      (filters.type === "" || prop.type === filters.type) &&
      (filters.status === "" || prop.status === filters.status)
  );

  return (
    <>
      <div className="block md:hidden">
        <Dropdown />
      </div>
      <h1 className="text-2xl font-bold mb-4">Property Management Dashboard</h1>
      <CheckInCheckOut checkIns={5} checkOuts={3} />
      <PropertyFilters filters={filters} onFilterChange={handleFilterChange} />
      <PropertyList properties={filteredProperties} />
      <AddPropertyForm
        form={form}
        onFormChange={setForm}
        onAddProperty={handleAddProperty}
        errors={errors}
      />
    </>
  );
};

export default Property;