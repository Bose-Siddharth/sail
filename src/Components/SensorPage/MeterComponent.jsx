import React, { useState } from "react";
import Gauge from "./Gauge/Gauge";
import Graph from "./Graph/Graph";

function MeterComponent({ value, minValue, maxValue, breaks, unit, name }) {
  const [GraphView, setGraphView] = useState(false);

  return (
    <>
      {GraphView ? (
        <Graph value={value} name={name} />
      ) : (
        <Gauge
          // value={Math.floor(Math.random() * (10 - 0 + 1) + 0)}
          value={value}
          minValue={minValue}
          maxValue={maxValue}
          breaks={breaks}
          unit={unit}
          name={name}
        />
      )}
    </>
  );
}

export default MeterComponent;
