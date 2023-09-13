import React from "react";

function BadgeOpen() {
  return (
    <div className="flex flex-row gap-2 self-end">
      <div className="badge badge-info badge-md"></div>
      <p className="text-sm">OPEN</p>
    </div>
  );
}

export default BadgeOpen;
