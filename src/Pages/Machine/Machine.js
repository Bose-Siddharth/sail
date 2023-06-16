import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faFireAlt,
  faTemperature0,
  faEarListen,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import VibrationChart from "../../Components/MachinePage/VibrationChart";
import MagneticFlux from "../../Components/MachinePage/MagneticFlux";
import Loading from "../../Components/Loading";
import CustomGauge from "../../Components/MachinePage/CustomGauge/CustomGauge";
import TempGraph from "../../Components/MachinePage/TempGraph/TempGraph";
import UltrasonicGauge from "../../Components/MachinePage/Ultrasonic/UltrasonicGauge";

function Machine() {
  const [sensorData, setSensorData] = useState(null);
  const [view, setView] = useState({
    graph: false,
    gauge: true,
  });

  const setFlexData = () => {
    axios.get("http://192.168.90.71:3001/sensor-data").then((res) => {
      if (res.data) {
        setSensorData(res.data.data);
        // console.log(res.data.data);
      }
    });
  };

  useQuery("data", setFlexData, { refetchInterval: 2000 });

  const handleTempView = () => {
    console.log("clicked");
    setView({
      graph: !view.graph,
      gauge: !view.gauge,
    });
  };

  if (sensorData == null) {
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
  }

  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-16 font-bold">Machine</p>

      <div className="grid lg:grid-cols-4 gap-4 mb-16">
        <div className="rounded-lg bg-white min-h-30 w-full border m-auto p-5 shadow">
          <div className="text-gray-600 text-2xl float-left inline-block align-middle p-5">
            Temperature
          </div>
          <div className="text-white float-right border p-3 rounded-full bg-blue-400 inline-block align-middle">
            <FontAwesomeIcon
              style={{ fontSize: "2rem" }}
              icon={faTemperature0}
            />
          </div>
        </div>
        <div className="rounded-lg bg-white min-h-30 w-full border m-auto p-5 shadow">
          <div className="text-gray-600 text-2xl float-left inline-block align-middle p-5">
            Humidity
          </div>
          <div className="text-white float-right border rounded-full bg-blue-400 inline-block align-middle p-5">
            <FontAwesomeIcon style={{ fontSize: "2rem" }} icon={faDroplet} />
          </div>
        </div>
        <div className="rounded-lg bg-white min-h-30 w-full border m-auto p-5 shadow">
          <div className="text-gray-600 text-2xl float-left inline-block align-middle p-5">
            Heat Flux
          </div>
          <div className="text-white float-right border rounded-full bg-blue-400 inline-block align-middle p-5">
            <FontAwesomeIcon style={{ fontSize: "2rem" }} icon={faFireAlt} />
          </div>
        </div>
        <div className="rounded-lg bg-white min-h-30 w-full border m-auto p-5 shadow">
          <div className="text-gray-600 text-2xl float-left inline-block align-middle p-5">
            Ultrasound
          </div>
          <div className="text-white float-right border rounded-full bg-blue-400 inline-block align-middle p-5">
            <FontAwesomeIcon style={{ fontSize: "2rem" }} icon={faEarListen} />
          </div>
        </div>
      </div>
      <section className="flex flex-row justify-center pb-16">
        <div className="grid grid-cols-2 w-full">
          <div
            className={
              view.graph
                ? "inline-block w-max h-max p-2 shadow border"
                : "inline-block h-max p-2 shadow border"
            }
          >
            <h2 className="text-center text-gray-700 text-xl mt-3 ">
              Temperature
            </h2>
            {view.gauge ? (
              <div>
                <div className="flex justify-around">
                  <div className=" text-center">
                    <CustomGauge value={sensorData[3].A.Temperature} />
                    <span className=" text-lg text-gray-500 text-siz">
                      Skin Temperature
                    </span>
                  </div>
                  <div className=" text-center">
                    <CustomGauge value={sensorData[4].A.Temperature} />
                    <span className=" text-lg text-gray-500 text-siz">
                      Bearing Temperature
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" h-64 p-2 max-w-fit">
                <div className=" flex justify-center">
                  <div className=" text-center">
                    <TempGraph sensorData={sensorData} />
                  </div>
                  <div className=" text-center">
                    <TempGraph sensorData={sensorData} />
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-center mt-4 mb-4">
              <button
                type="button"
                className=" w-36 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleTempView}
              >
                {view.gauge ? "View Graph" : "View Gauge"}
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="inline-block w-full max-h-fit shadow border ml-10 p-3">
            <h2 className="text-center text-gray-700 text-xl mt-2">
              Vibration
            </h2>
            <VibrationChart sensorData={sensorData} />
          </div>
          <div className="inline-block p-3 w-full max-h-fit  shadow border -mt-20">
            <h2 className="text-center text-gray-700 text-lg mb-3">
              Magnetic Flux
            </h2>
            <MagneticFlux sensorData={sensorData} />
          </div>
          <div className="inline-block p-3 w-full shadow border  ml-10 mt-10">
            <h2 className="text-center text-gray-700 text-lg mb-3">
              Ultrasonic
            </h2>
            <div className="flex flex-col justify-center items-center ">
              <UltrasonicGauge  value={sensorData[3].A.Ultrasonic} />
              <span className=" text-lg text-gray-500 text-siz">
                Ultrasonic
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Machine;
