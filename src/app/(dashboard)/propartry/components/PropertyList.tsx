type Property = {
  id: number
  name: string
  type: string
  status: string
}

type PropertyListProps = {
  properties: Property[]
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <div className="mb-6 rounded bg-white p-4 shadow">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Type</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.id}>
              <td className="p-2">{property.name}</td>
              <td className="p-2">{property.type}</td>
              <td className="p-2">{property.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PropertyList
