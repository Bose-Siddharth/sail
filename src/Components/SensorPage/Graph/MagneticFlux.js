//npm install react-apexcharts apexcharts

import React, { useState, useEffect, useRef } from 'react';
import ReactApexChart from 'react-apexcharts';

const XAXISRANGE = 1800000;

const getRandomData = (lastDate) => {
  const randomDataPoint = Math.floor(Math.random() * 90) + 10;
  return {
    x: lastDate + XAXISRANGE,
    y: randomDataPoint,
  };
};

function MagneticFlux({ sensorData }) {
  const [series, setSeries] = useState([
    {
      data: []
    }
  ]);

  const chartRef = useRef(null);

  useEffect(() => {
    let lastDate = Date.now() - XAXISRANGE;
    const interval = setInterval(() => {
      lastDate += XAXISRANGE;
      const newDataPoint = getRandomData(lastDate);
      setSeries((prevSeries) => [
        {
          data: [...prevSeries[0].data, newDataPoint]
        }
      ]);
      if (chartRef.current) {
        setSeries((prevSeries) => [
          {
            data: [...prevSeries[0].data, newDataPoint]
          }
        ]);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="chart">
      <ReactApexChart
        options={{
          chart: {
            id: 'realtime',
            height: 350,
            type: 'line',
            animations: {
              enabled: true,
              easing: 'linear',
              dynamicAnimation: {
                speed: 1000
              }
            },
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          title: {
            text: 'Dynamic Updating Chart',
            align: 'left'
          },
          markers: {
            size: 0
          },
          xaxis: {
            type: 'datetime',
            range: XAXISRANGE
          },
          yaxis: {
            max: 100
          },
          legend: {
            show: false
          }
        }}
        series={series}
        type="line"
        height={350}
        ref={chartRef}
      />
    </div>
  );
}

export default MagneticFlux;
