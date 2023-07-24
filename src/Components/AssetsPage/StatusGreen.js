import React from "react";

function StatusGreen() {
  return (
    <div className="space-x-4 flex">
      <div className="rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200">
        <span className="block h-3 w-3 bg-green-400 rounded-full"> </span>
      </div>
    </div>
  );
}

export default StatusGreen;
