import GaugeComponent from "react-gauge-component";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Gauge.css";

function Gauge({ value, minValue, maxValue, breaks, unit, name }) {
  const setWidth = () => {
    if (window.innerWidth <= 600) return "25vw";
    else if (600 < window.innerWidth && window.innerWidth <= 800) return "37%";
    else if (800 < window.innerWidth && window.innerWidth <= 1200) return "35%";
    else if (1200 < window.innerWidth) return "45%";
  };

  const limits = [...breaks, maxValue];
  const colors = ["#5be12c", "#f5cd19", "#ea4228"];

  const width = setWidth();

  const [poniterColour, setPointerColour] = useState();
  const [gaugeValue, setGaugeValue] = useState(value);

  useEffect(() => {
    const selectColor = () => {
      if (value <= limits[0]) return "#5be12c";
      else if (limits[0] < value && value <= limits[1]) return "#f5cd19";
      else if (limits[1] < value) return "#ea4228";
    };

    setPointerColour(selectColor());
    setGaugeValue(value);
  }, [value]);

  return (
    <div className="bg-gray-900 rounded-2xl shadow-xl p-3">
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
          animationDelay: 10,
          color: poniterColour,
        }}
      />

      <div className="xl:text-xl sm:text-sm text-white text-semibold text-center">
        {name}
      </div>
    </div>
  );
}

export default Gauge;
