import React from "react";

function BadgeClosed() {
  return (
    <div className="flex flex-row gap-2 self-end">
      <div className="badge badge-error badge-md"></div>
      <p className="text-sm">CLOSED</p>
    </div>
  );
}

export default BadgeClosed;
