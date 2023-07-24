//npm install react-apexcharts apexcharts

import React, { useState } from "react";
import Chart from "react-apexcharts";

function MagneticFlux({ sensorData }) {
  const [options, setOptions] = useState({
    chart: {
      id: "xyz",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: false,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
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
      categories: [
        "10:00",
        "10:01",
        "10:02",
        "10:03",
        "10:04",
        "10:05",
        "10:06",
        "10:07",
        "10:08",
      ],
    },
  });

  const XAxis = [];
  const YAxis = [];
  const ZAxis = [];

  for (let index = 0; index < sensorData.length; index++) {
    XAxis.push(sensorData[index].A.EMF_X);
    YAxis.push(sensorData[index].A.EMF_Y);
    ZAxis.push(sensorData[index].A.EMF_Z);
  }

  const series = [
    {
      name: "X-axis",
      data: XAxis,
    },
    {
      name: "Y-axis",
      data: YAxis,
    },
    {
      name: "Z-axis",
      data: ZAxis,
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="area" />
    </div>
  );
}

export default MagneticFlux;
