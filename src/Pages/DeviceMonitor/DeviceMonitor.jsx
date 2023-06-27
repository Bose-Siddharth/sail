import React from "react";

function DeviceMonitor() {
  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mt-5 font-bold">Monitor</p>
      <p className="text-gray-500 text-lg mb-5 font-semibold">
        {window.location.pathname}
      </p>
      <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-3 text-center ">
        <div className="rounded-lg w-full h-full m-auto shadow bg-gray-200">
          <div className="text-white h-6 rounded-t-lg border-blue-600 font-semibold roun sm:text-sm block bg-blue-600">
            Department
          </div>
          <div className="text-gray-800 w-full text-lg font-bold tracking-widest p-1 lg:h-fit truncate hover:overflow-visible hover:whitespace-normal">
            BOF
          </div>
        </div>
        <div className="rounded-lg w-full h-full m-auto shadow bg-gray-200">
          <div className="text-white h-6 rounded-t-lg border-blue-600 font-semibold roun sm:text-sm block bg-blue-600">
            Site
          </div>
          <div className="text-gray-800 w-full text-lg font-bold tracking-widest p-1 lg:h-fit truncate hover:overflow-visible hover:whitespace-normal">
            Billet WTP
          </div>
        </div>
        <div className="rounded-lg w-full h-full m-auto shadow bg-gray-200">
          <div className="text-white h-6 rounded-t-lg border-blue-600 font-semibold roun sm:text-sm block bg-blue-600">
            Application
          </div>
          <div className="text-gray-800 w-full text-lg font-bold tracking-widest p-1 lg:h-fit truncate hover:overflow-visible hover:whitespace-normal">
            Cooling Tower
          </div>
        </div>
        <div className="rounded-lg w-full h-full m-auto shadow bg-gray-200">
          <div className="text-white h-6 rounded-t-lg border-blue-600 font-semibold roun sm:text-sm block bg-blue-600">
            Machine
          </div>
          <div className="text-gray-800 w-full text-lg font-bold tracking-widest p-1 lg:h-fit truncate hover:overflow-visible hover:whitespace-normal">
            Billet HEC CTF 1 DE
          </div>
        </div>
        <div className="rounded-lg w-full h-full m-auto shadow bg-gray-200">
          <div className="text-white h-6 rounded-t-lg border-blue-600 font-semibold roun sm:text-sm block bg-blue-600">
            MUID
          </div>
          <div className="text-gray-800 w-full text-lg font-bold tracking-widest p-1 lg:h-fit truncate hover:overflow-visible hover:whitespace-normal">
            ELMIN112022-00148
          </div>
        </div>
      </div>
      <div className="w-full h-screen rounded-lg bg-gray-100 my-5"></div>
    </div>
  );
}

export default DeviceMonitor;
