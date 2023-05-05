import {
  faDroplet,
  faFireAlt,
  faTemperature0,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import GaugeChart from "react-gauge-chart";
// import { tempData } from "../data/tempData";
// import { humidData } from "../data/humidData";

function Machine() {
  const { data } = useQuery("tempData", () =>
    axios.get("http://localhost:3004/tempData").then((res) => {
      setTempData(res.data);
      setLoading(false);
    })
  );

  const { data: humidData } = useQuery("humidData", () =>
    axios.get("http://localhost:3004/humidData").then((res) => {
      setHumidData(res.data);
      setLoading(false);
    })
  );

  const [TempData, setTempData] = useState(data);
  const [HumidData, setHumidData] = useState(humidData);

  // create a loading state
  const [loading, setLoading] = useState(true);

  //

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-16 font-bold">Machine</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
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
      </div>
      <div className="inline-block w-1/3 h-96 p-3 mr-3 shadow border">
        <h2 className="text-center my-6 text-gray-700 text-lg underline">
          Temperature
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={TempData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Temparature" fill="#60a5fa" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="inline-block w-1/3 h-96 p-3 mr-3 shadow border">
        <h2 className="text-center my-6 text-gray-700 text-lg underline">
          Humidity
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={HumidData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Humidity" fill="#60a5fa" />
          </BarChart>
        </ResponsiveContainer>
      </div>
        <div style={{ height: 500, width: 500, marginTop: 55, textAlign: "center" }}>
            
          <GaugeChart
            id="gauge-chart5"
            nrOfLevels={420}
            arcsLength={[0.3, 0.5, 0.2]}
            colors={["#5BE12C", "#F5CD19", "#EA4228"]}
            arcPadding={0.02}
            textColor="gray"
            hideText={true}
          />
          <span>37%</span>
        </div>
    </div>
  );
}

export default Machine;
