type CheckInCheckOutProps = {
  checkIns: number
  checkOuts: number
}

const CheckInCheckOut: React.FC<CheckInCheckOutProps> = ({ checkIns, checkOuts }) => {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-4">
      <div className="rounded bg-white p-4 shadow">Check-ins: {checkIns}</div>
      <div className="rounded bg-white p-4 shadow">Check-outs: {checkOuts}</div>
    </div>
  )
}

export default CheckInCheckOut
