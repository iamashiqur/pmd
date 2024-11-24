import React from "react";
type CheckInCheckOutProps = {
  checkIns: number;
  checkOuts: number;
};

const CheckInCheckOut: React.FC<CheckInCheckOutProps> = ({ checkIns, checkOuts }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="p-4 bg-white shadow rounded">Check-ins: {checkIns}</div>
      <div className="p-4 bg-white shadow rounded">Check-outs: {checkOuts}</div>
    </div>
  );
};

export default CheckInCheckOut;
