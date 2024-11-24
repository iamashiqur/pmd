type Property = {
  id: number;
  name: string;
  type: string;
  status: string;
};

type PropertyListProps = {
  properties: Property[];
};

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <div className="bg-white shadow rounded p-4 mb-6">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Type</th>
            <th className="text-left p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
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
};

export default PropertyList;
