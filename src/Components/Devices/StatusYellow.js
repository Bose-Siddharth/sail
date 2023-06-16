import React from "react";

function StatusYellow() {
  return (
    <div className="mt-3 space-x-4 flex p-1">
      <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
        <span className="block h-6 w-6 bg-yellow-400 rounded-full"> </span>
      </div>
    </div>
  );
}

export default StatusYellow;
