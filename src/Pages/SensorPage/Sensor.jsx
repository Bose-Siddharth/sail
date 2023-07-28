import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading";
import MeterComponent from "../../Components/SensorPage/MeterComponent";
import HealthBar from "../../Components/SensorPage/HealthBar/HealthBar";
import VibratiionChart from "../../Components/SensorPage/Graph/VibrationChart";
import { generateDumy } from "../../Utils/DummyDataGenerate";
import Graph from "../../Components/SensorPage/Graph/Graph";
import MagneticFlux from "../../Components/SensorPage/Graph/MagneticFlux";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";

function Sensor() {
  const [graphView, setGrapgView] = useState(false);

  const fetchData = async () => {
    // const response = await fetch("http://localhost:3001/sensor-data");
    // const data = await response.json();
    const data = generateDumy();
    console.log(data.data);
    return data.data;
  };

  const { data } = useQuery("data", fetchData, { refetchInterval: 2000 });

  const handleToggle = () => {
    if (graphView) {
      console.log("set true");
      setGrapgView(false);
    } else if (!graphView) {
      console.log("set false");
      setGrapgView(true);
    }
  };

  if (data == null) {
    return (
      <div
        style={{
          height: "80vh",
          width: "80vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading />
      </div>
    );
  } else
    return (
      <div className="px-4 md:px-10">
        <div>
          <div className="flex flex-nowrap justify-between items-center">
            <div>
              {/* page description */}
              <p className="text-gray-700 text-3xl font-bold">Sensor</p>
              <p className="text-gray-500 text-lg mb-5 font-semibold">
                | {window.location.pathname.slice(1).replace("/", ">")}
              </p>
            </div>
            <div className="flex gap-3">
              {/* other options */}
              <AdjustmentsVerticalIcon className="w-12 rounded-full p-2 hover:p-1 bg-slate-100 text-gray-700 shadow-inner hover:shadow-md" />
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-max"
                onClick={handleToggle}
              >
                Graph view
              </button>
            </div>
          </div>

          {/* device description */}
          <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-3 text-center ">
            <div className="rounded-lg w-full h-full m-auto shadow bg-gray-200">
              <div className="text-white h-6 rounded-t-lg border-blue-600 font-semibold sm:text-sm block bg-blue-600">
                Address
              </div>
              <div className="text-gray-800 w-full text-lg font-bold tracking-widest p-1 lg:h-fit truncate hover:overflow-visible hover:whitespace-normal">
                Section-A
              </div>
            </div>
            {/* <div className="rounded-lg w-full h-full m-auto shadow bg-gray-200">
          <div className="text-white h-6 rounded-t-lg border-blue-600 font-semibold sm:text-sm block bg-blue-600">
            Site
          </div>
          <div className="text-gray-800 w-full text-lg font-bold tracking-widest p-1 lg:h-fit truncate hover:overflow-visible hover:whitespace-normal">
            Billet WTP
          </div>
        </div> */}
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
                Asset
              </div>
              <div className="text-gray-800 w-full text-lg font-bold tracking-widest p-1 lg:h-fit truncate hover:overflow-visible hover:whitespace-normal">
                Spiral Fan
              </div>
            </div>
            <div className="rounded-lg w-full h-full m-auto shadow bg-gray-200">
              <div className="text-white h-6 rounded-t-lg border-blue-600 font-semibold sm:text-sm block bg-blue-600">
                MUID
              </div>
              <div className="text-gray-800 w-full text-lg font-bold tracking-widest p-1 lg:h-fit truncate hover:overflow-visible hover:whitespace-normal">
                XYZ-1232323
              </div>
            </div>
            <div className="rounded-lg w-full h-full m-auto shadow bg-gray-200">
              <div className="text-white h-6 rounded-t-lg border-blue-600 font-semibold sm:text-sm block bg-blue-600">
                Health status
              </div>
              <div className="text-gray-800 w-full text-lg font-bold tracking-widest p-1 lg:h-fit truncate hover:overflow-visible hover:whitespace-normal">
                <HealthBar />
              </div>
            </div>
          </div>
        </div>

        {/* monitor page */}
        <div className="w-full my-5 rounded-lg">
          {/* analogue dials for displaying sensor data */}
          {graphView ? (
            <div className="flex flex-col gap-3">
              <div className=" flex flex-col w-full bg-gray-900 rounded-lg">
                <div className="text-white w-full text-xs md:text-base lg:text-lg xl:text-xl font-bold tracking-wider bg-grad bg-gradient-to-r from-red-500 to-blue-500 rounded-t-lg text-center">
                  TEMPERATURE
                </div>
                <div className="flex justify-between items-center">
                  <Graph
                    value={data[data.length - 1].A.Temperature}
                    name={"temperature"}
                  />
                  <Graph
                    value={data[data.length - 1].A.Temperature}
                    name={"temperature"}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <div className="flex-1 text-center rounded-lg shadow-inner bg-green-50 border-2 border-green-500 border-opacity-50">
                  <div className="text-white text-xs md:text-base lg:text-lg xl:text-xl font-bold tracking-wider bg-gradient-to-r from-green-500 to-blue-500 rounded-t-md">
                    VIBRATION
                  </div>
                  <div className="flex justify-between items-center">
                    <VibratiionChart sensorData={data} />
                  </div>
                </div>
                <div className="flex-1 text-center rounded-lg shadow-inner bg-blue-50 border-2 border-sky-500 border-opacity-50">
                  <div className="text-white text-xs md:text-base lg:text-lg xl:text-xl font-bold tracking-wider bg-gradient-to-r from-sky-500 to-indigo-500 rounded-t-md truncate ">
                    MAGNETIC FLUX
                  </div>
                  <div className="flex justify-between items-center">
                    <MagneticFlux sensorData={data} />
                  </div>
                </div>
              </div>

              {/* <VibratiionChart sensorData={data}/> */}
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 ">
              {/* left half */}
              {/* temperature  */}
              <div className=" flex flex-col sm:w-1/4 justify-start items-center bg-gray-900 rounded-lg">
                <div className="text-white w-full text-xs md:text-base lg:text-lg xl:text-xl font-bold tracking-wider bg-grad bg-gradient-to-r from-red-500 to-blue-500 rounded-t-lg text-center">
                  TEMPERATURE
                </div>
                <div className="flex flex-row sm:flex-col h-full justify-start">
                  <MeterComponent
                    value={data[data.length - 1].A.Temperature}
                    minValue={0}
                    maxValue={20}
                    breaks={[10, 15]}
                    unit="°C"
                    name="Asset Skin"
                  />
                  <MeterComponent
                    value={data[data.length - 1].A.Temperature}
                    minValue={0}
                    maxValue={10}
                    breaks={[2, 4]}
                    unit="°C"
                    name="DE"
                  />
                </div>
              </div>
              {/* right half */}
              <div className="flex flex-col sm:flex-row gap-2 justify-start">
                {/* vibration  */}
                <div className="w-full h-max text-center rounded-lg shadow-inner bg-green-50 border-2 border-green-500 border-opacity-50">
                  <div className="text-white text-xs md:text-base lg:text-lg xl:text-xl font-bold tracking-wider bg-gradient-to-r from-green-500 to-blue-500 rounded-t-md">
                    VIBRATION
                  </div>
                  <div className="flex flex-row flex-wrap gap-1 items-center p-5 justify-center w-full h-full">
                    <MeterComponent
                      value={data[data.length - 1].A.Vibration_X}
                      minValue={0}
                      maxValue={11}
                      breaks={[5, 8]}
                      unit="mm/sec"
                      name="X Axis"
                    />
                    <MeterComponent
                      value={data[data.length - 1].A.Vibration_Y}
                      minValue={0}
                      maxValue={11}
                      breaks={[5, 8]}
                      unit="mm/sec"
                      name="Y Axis"
                    />
                    <MeterComponent
                      value={data[data.length - 1].A.Vibration_Z}
                      minValue={0}
                      maxValue={11}
                      breaks={[5, 8]}
                      unit="mm/sec"
                      name="Z Axis"
                    />
                    <MeterComponent
                      value={data[data.length - 1].A.Vibration_Y}
                      minValue={0}
                      maxValue={11}
                      breaks={[5, 8]}
                      unit="mm/sec²"
                      name="Peak"
                    />
                    {/* <MeterComponent value={Math.abs(data[data.length-1].A.Vibration_Y)} minValue={0} maxValue={11} breaks={[5,8]} unit="mm/sec²" name="Peak"/> */}
                  </div>
                </div>
                {/* magnetic flux  */}
                <div className="w-full h-max text-center rounded-lg shadow-inner bg-blue-50 border-2 border-sky-500 border-opacity-50">
                  <div className="text-white text-xs md:text-base lg:text-lg xl:text-xl font-bold tracking-wider bg-gradient-to-r from-sky-500 to-indigo-500 rounded-t-md truncate ">
                    MAGNETIC FLUX
                  </div>
                  <div className="flex flex-row flex-wrap gap-1 items-center p-5 justify-center w-full h-full">
                    <MeterComponent
                      value={data[data.length - 1].A.EMF_X}
                      minValue={0}
                      maxValue={50}
                      breaks={[20, 40]}
                      unit="gauss "
                      name="X Axis"
                    />
                    <MeterComponent
                      value={data[data.length - 1].A.EMF_Y}
                      minValue={0}
                      maxValue={50}
                      breaks={[20, 40]}
                      unit="gauss "
                      name="Y Axis"
                    />
                    <MeterComponent
                      value={data[data.length - 1].A.EMF_Z}
                      minValue={0}
                      maxValue={50}
                      breaks={[20, 40]}
                      unit="gauss "
                      name="Z Axis"
                    />
                    <MeterComponent
                      value={data[data.length - 1].A.EMF_X}
                      minValue={0}
                      maxValue={50}
                      breaks={[20, 40]}
                      unit="gauss "
                      name="Peak"
                    />
                    {/* <MeterComponent value={data[data.length-1].A.EMF_Y} minValue={0} maxValue={50} breaks={[20,40]} unit="gauss " name="Peak"/> */}
                  </div>
                </div>
                {/* MICROPHONICS */}
                <div className=" w-full h-max sm:w-3/4  text-center rounded-lg shadow-inner bg-orange-50 border-2 border-orange-500 border-opacity-50">
                  <div className="text-white text-xs md:text-base lg:text-lg xl:text-xl font-bold tracking-wider bg-gradient-to-r from-orange-500 to-red-500 rounded-t-md">
                    MICROPHONICS
                  </div>
                  <div className="flex flex-row sm:flex-col flex-wrap gap-1 items-center p-5 justify-center w-full h-full">
                    <MeterComponent
                      value={data[data.length - 1].A.Ultrasonic}
                      minValue={0}
                      maxValue={100}
                      breaks={[20, 60]}
                      unit="dB"
                      name="Ulta Sound"
                    />
                    <MeterComponent
                      value={data[data.length - 1].A.Ultrasonic}
                      minValue={0}
                      maxValue={100}
                      breaks={[20, 40]}
                      unit="dB"
                      name="Noise"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default Sensor;
