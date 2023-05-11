import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faFireAlt,
  faTemperature0,
  faEarListen,
} from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
import React, { useEffect } from "react";
// import { useQuery } from "react-query";
// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Legend,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// import ApexCharts from 'apexcharts'
import VibrationChart from "./components/VibrationChart";
// import ReactSpeedometer from "react-d3-speedometer";
import TempGauge from "./components/TempGauge";
import MagneticFlux from './components/MagneticFlux';
//change

function Machine() {

  // 

  // const { data } = useQuery("tempData", () =>
  //   axios.get("http://localhost:3004/tempData").then((res) => {
  //     setTempData(res.data);
  //     setLoading(false);
  //   })
  // );

  // const { data: humidData } = useQuery("humidData", () =>
  //   axios.get("http://localhost:3004/humidData").then((res) => {
  //     setHumidData(res.data);
  //     setLoading(false);
  //   })
  // );

  // const [TempData, setTempData] = useState(data);
  // const [HumidData, setHumidData] = useState(humidData);

  // create a loading state
  // const [loading, setLoading] = useState(false);

  // //

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-16 font-bold">Machine</p>

      <div className="grid lg:grid-cols-4 gap-4 mb-16">
        <div className="rounded-lg bg-white min-h-30 w-full border m-auto p-5 shadow rounded">
          <div className="text-gray-600 text-2xl float-left inline-block align-middle p-5">
            Temperature
          </div>
          <div className="text-white float-right border p-3 rounded-full bg-blue-400 inline-block align-middle p-5">
            <FontAwesomeIcon
              style={{ fontSize: "2rem" }}
              icon={faTemperature0}
            />
          </div>
        </div>
        <div className="rounded-lg bg-white min-h-30 w-full border m-auto p-5 shadow rounded">
          <div className="text-gray-600 text-2xl float-left inline-block align-middle p-5">
            Humidity
          </div>
          <div className="text-white float-right border p-3 rounded-full bg-blue-400 inline-block align-middle p-5">
            <FontAwesomeIcon style={{ fontSize: "2rem" }} icon={faDroplet} />
          </div>
        </div>
        <div className="rounded-lg bg-white min-h-30 w-full border m-auto p-5 shadow rounded">
          <div className="text-gray-600 text-2xl float-left inline-block align-middle p-5">
            Heat Flux
          </div>
          <div className="text-white float-right border p-3 rounded-full bg-blue-400 inline-block align-middle p-5">
            <FontAwesomeIcon style={{ fontSize: "2rem" }} icon={faFireAlt} />
          </div>
        </div>
        <div className="rounded-lg bg-white min-h-30 w-full border m-auto p-5 shadow rounded">
          <div className="text-gray-600 text-2xl float-left inline-block align-middle p-5">
            Ultrasound
          </div>
          <div className="text-white float-right border p-3 rounded-full bg-blue-400 inline-block align-middle p-5">
            <FontAwesomeIcon style={{ fontSize: "2rem" }} icon={faEarListen} />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div className="inline-block w-6/6 h-96 p-3 mr-3 shadow border mb-10">
          <h2 className="text-center text-gray-700 text-lg underline">
            Temperature
          </h2>
          <div className="mx-5">
          <TempGauge value={22}/>
          </div>
        </div>
        <div className="inline-block w-6/6 h-96 p-3 mr-3 shadow border">
          <h2 className="text-center text-gray-700 text-lg underline">
            Vibration
          </h2>
          <VibrationChart />
        </div>
        <div className="inline-block w-6/6  h-auto p-3 mr-3 mb-10 shadow border">
          <h2 className="text-center my-2 text-gray-700 text-lg underline">
            Magnetic Flux
          </h2>
          <MagneticFlux/>
        </div>
      </div>
    </div>
  );
}

export default Machine;
