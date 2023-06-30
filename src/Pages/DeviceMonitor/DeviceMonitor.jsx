import React from "react";
import TemperatureGauge from "../../Components/DeviceMonitor/Temperature/TemperatureGauge";

function DeviceMonitor() {
  return (
    <div className="px-4 md:px-16">
      {/* page description */}
      <p className="text-gray-700 text-3xl mt-5 font-bold">Monitor</p>
      <p className="text-gray-500 text-lg mb-5 font-semibold">
        {window.location.pathname}
      </p>
      {/* device description */}
      <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-3 text-center ">
        <div className="rounded-lg w-full h-full m-auto shadow bg-gray-200">
          <div className="text-white h-6 rounded-t-lg border-blue-600 font-semibold sm:text-sm block bg-blue-600">
            Department
          </div>
          <div className="text-gray-800 w-full text-lg font-bold tracking-widest p-1 lg:h-fit truncate hover:overflow-visible hover:whitespace-normal">
            BOF
          </div>
        </div>
        <div className="rounded-lg w-full h-full m-auto shadow bg-gray-200">
          <div className="text-white h-6 rounded-t-lg border-blue-600 font-semibold sm:text-sm block bg-blue-600">
            Site
          </div>
          <div className="text-gray-800 w-full text-lg font-bold tracking-widest p-1 lg:h-fit truncate hover:overflow-visible hover:whitespace-normal">
            Billet WTP
          </div>
        </div>
        <div className="rounded-lg w-full h-full m-auto shadow bg-gray-200">
          <div className="text-white h-6 rounded-t-lg border-blue-600 font-semibold sm:text-sm block bg-blue-600">
            Application
          </div>
          <div className="text-gray-800 w-full text-lg font-bold tracking-widest p-1 lg:h-fit truncate hover:overflow-visible hover:whitespace-normal">
            Cooling Tower
          </div>
        </div>
        <div className="rounded-lg w-full h-full m-auto shadow bg-gray-200">
          <div className="text-white h-6 rounded-t-lg border-blue-600 font-semibold sm:text-sm block bg-blue-600">
            Machine
          </div>
          <div className="text-gray-800 w-full text-lg font-bold tracking-widest p-1 lg:h-fit truncate hover:overflow-visible hover:whitespace-normal">
            Billet HEC CTF 1 DE
          </div>
        </div>
        <div className="rounded-lg w-full h-full m-auto shadow bg-gray-200">
          <div className="text-white h-6 rounded-t-lg border-blue-600 font-semibold sm:text-sm block bg-blue-600">
            MUID
          </div>
          <div className="text-gray-800 w-full text-lg font-bold tracking-widest p-1 lg:h-fit truncate hover:overflow-visible hover:whitespace-normal">
            ELMIN112022-00148
          </div>
        </div>
      </div>
      {/* monitor page */}
      <div className="w-full my-5 rounded-lg">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex flex-col sm:w-1/3 justify-start items-center bg-gray-900 rounded-lg pb-10">
            <div className="text-white w-full text-xs md:text-base lg:text-lg xl:text-xl font-bold tracking-widest bg-grad bg-gradient-to-r from-red-500 to-blue-500 rounded-t-lg text-center">
            TEMPERATURE
            </div>
            <div className="flex flex-row sm:flex-col h-full justify-start"> 
              <TemperatureGauge value={10} minValue={0} maxValue={50} breaks={[20,40]} unit="°C" name="Machine Skin"/>
              <TemperatureGauge value={10} minValue={0} maxValue={50} breaks={[20,40]} unit="°C" name="DE"/>
              <TemperatureGauge value={10} minValue={0} maxValue={50} breaks={[20,40]} unit="°C" name="NDE"/>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center w-full">
            <div className="w-full h-full pb-7 text-center rounded-lg shadow-inner border-2 border-green-500 border-opacity-50">
              <div className="text-white text-xs md:text-base lg:text-lg xl:text-xl font-bold tracking-widest bg-gradient-to-r from-green-500 to-blue-500 rounded-t-md">
              VIBRATION
              </div>
              <div className="flex flex-row flex-wrap gap-1 items-center p-1 justify-around w-full h-full">
                <TemperatureGauge value={10} minValue={0} maxValue={50} breaks={[20,40]} unit="mm/sec" name="X Axis"/>
                <TemperatureGauge value={10} minValue={0} maxValue={50} breaks={[20,40]} unit="mm/sec" name="Y Axis"/>
                <TemperatureGauge value={10} minValue={0} maxValue={50} breaks={[20,40]} unit="mm/sec" name="Z Axis"/>
                <TemperatureGauge value={10} minValue={0} maxValue={50} breaks={[20,40]} unit="mm/sec²" name="Peak"/>
              </div>
            </div> 
            <div className="w-full h-full pb-7 text-center rounded-lg shadow-inner border-2 border-sky-500 border-opacity-50">
              <div className="text-white text-xs md:text-base lg:text-lg xl:text-xl font-bold tracking-widest bg-gradient-to-r from-sky-500 to-indigo-500 rounded-t-md">
              MAGNETIC FLUX
              </div>
              <div className="flex flex-row flex-wrap gap-1 items-center p-1 justify-around w-full h-full">
                <TemperatureGauge value={10} minValue={0} maxValue={50} breaks={[20,40]} unit="gauss " name="X Axis"/>
                <TemperatureGauge value={10} minValue={0} maxValue={50} breaks={[20,40]} unit="gauss " name="Y Axis"/>
                <TemperatureGauge value={10} minValue={0} maxValue={50} breaks={[20,40]} unit="gauss " name="Z Axis"/>
              </div>
            </div>
            <div className="w-full h-full pb-7 text-center rounded-lg shadow-inner border-2 border-orange-500 border-opacity-50">
              <div className="text-white text-xs md:text-base lg:text-lg xl:text-xl font-bold tracking-widest bg-gradient-to-r from-orange-500 to-red-500 rounded-t-md">
              MICROPHONICS
              </div>
              <div className="flex flex-row flex-wrap gap-1 items-center p-1 justify-around w-full h-full">
                <TemperatureGauge value={10} minValue={0} maxValue={50} breaks={[20,40]} unit="dB" name="Ulta Sound"/>
                <TemperatureGauge value={10} minValue={0} maxValue={50} breaks={[20,40]} unit="dB" name="Noise"/>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceMonitor;
