import React from "react";

function DeviceMonitor() {
  return (
    <div className="px-4 md:px-16">
      <div className="grid lg:grid-cols-5 sm:grid-cols-2 sm:gap-3 text-center ">
        <div className="rounded-lg w-full border m-auto shadow bg-blue-600">
          <div style={{ height: "15%" }}>
            <div className="text-white font-semibold sm:text-sm inline-block">
              Department
            </div>
          </div>
          <div className="bg-gray-200" style={{ height: "85%" }}>
            <div className="text-gray-800 bg-gray-200 w-full text-lg font-bold tracking-widest p-1 sm:h-16 lg:h-fit">
              BOF
            </div>
          </div>
        </div>
        <div className="rounded-lg max-h-max w-full border m-auto shadow bg-blue-600">
          <div style={{ height: "15%" }}>
            <div className="text-white font-semibold sm:text-sm inline-block">
            Site
            </div>
          </div>
          <div className="bg-gray-200" style={{ height: "85%" }}>
            <div className="text-gray-800 bg-gray-200 w-full text-lg font-bold tracking-widest p-1 sm:h-16 lg:h-fit">
            Billet WTP
            </div>
          </div>
        </div>
        <div className="rounded-lg max-h-max w-full border m-auto shadow bg-blue-600">
          <div style={{ height: "15%" }}>
            <div className="text-white font-semibold sm:text-sm inline-block">
            Application
            </div>
          </div>
          <div className="bg-gray-200" style={{ height: "85%" }}>
            <div className="text-gray-800 bg-gray-200 w-full text-lg font-bold tracking-widest p-1 sm:h-16 lg:h-fit">
            Cooling Tower
            </div>
          </div>
        </div>
        <div className="rounded-lg max-h-max w-full border m-auto shadow bg-blue-600">
          <div style={{ height: "15%" }}>
            <div className="text-white font-semibold sm:text-sm inline-block">
            Machine
            </div>
          </div>
          <div className="bg-gray-200" style={{ height: "85%" }}>
            <div className="text-gray-800 bg-gray-200 w-full text-lg font-bold tracking-widest p-1 sm:h-16 lg:h-fit">
            Billet HEC CTF 1 DE
            </div>
          </div>
        </div>
        <div className="rounded-lg max-h-max w-full border m-auto shadow bg-blue-600">
          <div style={{ height: "15%" }}>
            <div className="text-white font-semibold sm:text-sm inline-block">
            MUID
            </div>
          </div>
          <div className="bg-gray-200" style={{ height: "85%" }}>
            <div className="text-gray-800 bg-gray-200 w-full text-lg font-bold tracking-widest p-1 sm:h-16 lg:h-fit">
            ELMIN112022-00148
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceMonitor;
