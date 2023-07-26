import React, { useState, useEffect, useRef } from "react";
import Chart from "react-apexcharts";

function Graph({ value ,name }) {
    const [options] = useState({
        chart: {
          id: "xyz",
          toolbar: {
            show: false
          }
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
          categories: ["10:00", "10:01", "10:02", "10:03","10:00", "10:01", "10:02", "10:03", "10:04", "10:05", "10:06", "10:07", "10:08","10:01", "10:02", "10:03", "10:04", "10:05", "10:06", "10:07", "10:08"],
        },
      });
    
      const [series, setSeries] = useState([
        {
          name: name,
          data: [],
        },
      ]);

      const XAxisData = useRef([]);
    
      useEffect(() => {
        setSeries((prevSeries) => {
          XAxisData.current =[...XAxisData.current.slice(-10),value];
          return [{ ...prevSeries[0], data: XAxisData.current }];
        });
      }, [value]);
    
      return (
        <div className="flex-1 p-5">
          <Chart options={options} series={series} type="area" height={'100%'} width={'100%'} />
        </div>

      );
}

export default Graph