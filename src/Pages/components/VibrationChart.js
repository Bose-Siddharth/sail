//npm install react-apexcharts apexcharts

import React, { useState } from "react";
import Chart from "react-apexcharts";

function MagneticFlux() {
  // var newData =

  const [options, setOptions] = useState([
    {
      chart: {
        id: "xyz",
        background: "#F6F8FA",
        toolbar: {
          show: false, // Disable toolbar
        },
      },
      title: {
        text: "X-Axis", // Name of the chart
        align: "left", // Align the title to the right
        floating: false, // Allow the title to float above the chart
      },
      colors: ["#7BD39A"],
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
        type: "solid",
      },
      stroke: {
        width: 0,
        curve: "smooth",
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
      yaxis: {
        min: 0,
        max: 40,
        tickAmount: 2,
      },
    },
    {
      chart: {
        id: "xyz",
        background: "#F6F8FA",
        toolbar: {
          show: false, // Disable toolbar
        },
      },
      title: {
        text: "Y-Axis", // Name of the chart
        align: "left", // Align the title to the right
        floating: false, // Allow the title to float above the chart
      },
      colors: ["#7BD39A"],
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
        type: "solid",
      },
      stroke: {
        width: 0,
        curve: "smooth",
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
      yaxis: {
        min: 0,
        max: 40,
        tickAmount: 2,
      },
    },
    {
      chart: {
        id: "xyz",
        background: "#F6F8FA",
        toolbar: {
          show: false, // Disable toolbar
        },
      },
      title: {
        text: "Z-Axis", // Name of the chart
        align: "left", // Align the title to the right
        floating: false, // Allow the title to float above the chart
      },
      colors: ["#7BD39A"],
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
        type: "solid",
      },
      stroke: {
        width: 0,
        curve: "smooth",
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
      yaxis: {
        min: 0,
        max: 40,
        tickAmount: 2,
      },
    },
  ]);

  const [series, setSeries] = useState([
    [
      {
        name: "X-axis",
        data: [0, 30, 0, 25, 22, 0, 15, 4, 30],
      },
    ],
    [
      {
        name: "Y-axis",
        data: [0, 10, 0, 15, 26, 0, 40, 5, 35],
      },
    ],
    [
      {
        name: "Z-axis",
        data: [0, 20, 0, 15, 29, 0, 35, 4, 38],
      },
    ],
  ]);

  return (
    <div>
      <Chart options={options[0]} series={series[0]} height={130} type="area" />
      <Chart options={options[1]} series={series[1]} height={130} type="area" />
      <Chart options={options[2]} series={series[2]} height={130} type="area" />
    </div>
  );
}

export default MagneticFlux;
