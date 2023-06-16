import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "./TempGraph.css"

function TempGraph({ sensorData }) {
  const [options] = useState({
    chart: {
      id: "xyz",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
      },
    },
    xaxis: {
      categories: ["10:00", "10:01", "10:02", "10:03", "10:04", "10:05", "10:06", "10:07", "10:08"],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "X-axis",
      data: [],
    },
  ]);

  useEffect(() => {
    setSeries((prevSeries) => {
      const XAxis = sensorData.map((data) => data.A.Temperature);
      return [{ ...prevSeries[0], data: XAxis }];
    });
  }, [sensorData]);

  return (
    <div className="w-96">
      <Chart options={options} series={series} type="area" />
    </div>
  );
}

export default TempGraph;
