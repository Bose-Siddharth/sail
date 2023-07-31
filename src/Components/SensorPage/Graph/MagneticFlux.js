import React from "react";
import StreamingPlugin from "chartjs-plugin-streaming";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import { Chart as ChartJS} from "chart.js";
import "chart.js/auto"

ChartJS.register(StreamingPlugin);

export default function MagneticFlux() {
  return (
    <Line
      data={{
        datasets: [
          {
            label: "Dataset 1",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgb(255, 99, 132)",
            borderDash: [8, 4],
            fill: true,
            data: [],
          }
        ],
      }}
      options={{
        scales: {
          x: {
            type: "realtime",
            realtime: {
              delay: 2000,
              onRefresh: (chart) => {
                chart.data.datasets.forEach((dataset) => {
                  dataset.data.push({
                    x: Date.now(),
                    y: Math.random(),
                  });
                });
              },
            },
          },
        },
      }}
    />
  );
}
