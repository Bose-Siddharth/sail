import GaugeComponent from "react-gauge-component";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./TemperatureGauge.css";

function TemperatureGauge({ value, minValue, maxValue, breaks, unit, name }) {
  const limits = [...breaks, maxValue];
  const colors = ["#5be12c", "#f5cd19", "#ea4228"];
  const [width, setWidth] = useState(() => {
    if (window.innerWidth <= 600) return "20vw"
    else if (600 < window.innerWidth && window.innerWidth <= 800) return "37%"
    else if (800 < window.innerWidth && window.innerWidth <= 1200) return "40%"
    else if (1200 < window.innerWidth) return "60%"
  });

  const [poniterColour, setPointerColour] = useState(
    (() => {
      if (minValue < value && value <= limits[0]) return "#5be12c";
      else if (limits[0] < value && value <= limits[1]) return "#f5cd19";
      else if (limits[1] < value && value <= maxValue) return "#ea4228";
    })()
  );

  return (
    <div className="bg-gray-900 rounded-2xl shadow-xl p-3 mt-1">
      <GaugeComponent
        type="radial"
        value={value}
        minValue={minValue}
        maxValue={maxValue}
        style={{
          width: width,
          height: "auto",
        }}
        arc={{
          subArcs: limits.map((value, index) => ({
            limit: value,
            color: colors[index],
            showMark: true,
          })),
        }}
        labels={{
          valueLabel: {
            formatTextValue: (value) => value + " " + unit,
            matchColorWithArc: true,
            style: {
              fontSize: "45px",
              fontWeight: "semibold",
              fill: "#fff",
              textShadow:
                "black 0px 0px 0px, black 0px 0px 0px, black 0px 0px 0px",
            },
          },
          markLabel: {
            type: "outer",
            marks: limits.map((limit) => ({ value: limit })),
            valueConfig: { formatTextValue: (value) => value },
            style: {
              fontSize: "45px",
              fontWeight: "semibold",
              fill: "#fff",
              textShadow:
                "black 0px 0px 0px, black 0px 0px 0px, black 0px 0px 0px",
            },
          },
        }}
        pointer={{
          elastic: true,
          animationDelay: 0,
          color: poniterColour,
        }}
      />
      <div className="xl:text-xl sm:text-sm text-white text-semibold text-center">
        {name}
      </div>
    </div>
  );
}

export default TemperatureGauge;
