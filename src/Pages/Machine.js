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
import VibrationChart from "./components/VibrationChart";
import TempGauge from "./components/TempGauge";
import MagneticFlux from "./components/MagneticFlux";
import UltrasonicGauge from "./components/UltrasonicGauge";
import Loading from "./components/Loading";

function Machine() {
  const [sensorData, setSensorData] = useState(null);

  const setFlexData = () => {
    axios.get("http://192.168.90.71:3001/#").then((res) => {
      if (res.data) {
        setSensorData(res.data.data);
      }
    });
  };

  useQuery("data", setFlexData, { refetchInterval: 2000 });

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
        <Loading/>
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
      <section class="flex flex-col justify-center">
        <div class="grid grid-cols-2 gap-10">
          <div className="inline-block w-6/6 h-96 p-3 shadow border ">
            <h2 className="text-center text-gray-700 text-lg mb-3">
              Temperature
            </h2>
            <TempGauge sensorData={sensorData[4].A.Temperature} />
          </div>
          <div className="inline-block w-6/6 h-auto p-5 shadow border">
            <h2 className="text-center text-gray-700 text-lg mb-3">
              Vibration
            </h2>
            <VibrationChart sensorData={sensorData} />
          </div>
          <div className="inline-block w-6/6  h-auto p-3  shadow border -mt-36">
            <h2 className="text-center text-gray-700 text-lg mb-3">
              Magnetic Flux
            </h2>
            <MagneticFlux sensorData={sensorData} />
          </div>
          <div className="inline-block w-6/6  h-96 p-3 shadow border -mt-4">
            <h2 className="text-center text-gray-700 text-lg mb-3">
              Ultrasonic
            </h2>
            <UltrasonicGauge sensorData={sensorData[4].A.Ultrasonic} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Machine;
