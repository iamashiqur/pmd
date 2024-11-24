import type { PropertyForm } from '@/type'

type AddPropertyFormProps = {
  form: PropertyForm
  onFormChange: (updatedForm: PropertyForm) => void
  onAddProperty: () => void
  errors: { name: string; type: string; status: string }
}

const AddPropertyForm: React.FC<AddPropertyFormProps> = ({ form, onFormChange, onAddProperty, errors }) => {
  return (
    <div className="rounded bg-white p-4 shadow">
      <h2 className="mb-4 text-lg font-bold">Add New Property</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={e => onFormChange({ ...form, name: e.target.value })}
          className={`w-full rounded border p-2 ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <select
          value={form.type}
          onChange={e => onFormChange({ ...form, type: e.target.value })}
          className={`w-full rounded border p-2 ${errors.type ? 'border-red-500' : ''}`}
        >
          <option value="">Select Type</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Commercial">Commercial</option>
        </select>
        {errors.type && <p className="text-sm text-red-500">{errors.type}</p>}
      </div>
      <div className="mb-4">
        <select
          value={form.status}
          onChange={e => onFormChange({ ...form, status: e.target.value })}
          className={`w-full rounded border p-2 ${errors.status ? 'border-red-500' : ''}`}
        >
          <option value="">Select Status</option>
          <option value="Available">Available</option>
          <option value="Rented">Rented</option>
        </select>
        {errors.status && <p className="text-sm text-red-500">{errors.status}</p>}
      </div>

      <button onClick={onAddProperty} className="rounded bg-blue-500 p-2 text-white">
        Add Property
      </button>
    </div>
  )
}

export default AddPropertyForm
