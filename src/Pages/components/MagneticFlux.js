//npm install react-apexcharts apexcharts

import React, { useState } from "react";
import Chart from "react-apexcharts";


function MagneticFlux() {


  

  // var newData = 

  const [options, setOptions] = useState({
    chart: {
      id: "xyz",
      
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "X-axis",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
    {
      name: "Y-axis",
      data: [10, 50, 35, 20, 15,40, 60, 91, 100],
    },
    {
      name: "Z-axis",
      data: [13, 23, 35, 20, 15,50, 60, 91, 100],
    },
  ]);

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="area"
      />
    </div>
  );
}

export default MagneticFlux;
