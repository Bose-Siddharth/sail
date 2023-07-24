import React, {useState} from "react";
import ReactSpeedometer from "react-d3-speedometer";

const styles = {
  dial: {
    display: "inline-block",
    width: `200px`,
    height: `auto`,
    color: "#000",
    border: "0.5px solid #fff",
    padding: "2px"
  }
};

const UltrasonicGauge = ({ id, sensorData, title }) => {

  return (
    <div style={styles.dial} >
      <ReactSpeedometer
        maxValue={10}
        minValue={0}
        height={490}
        width={600}
        value={sensorData}
        needleTransition="easeQuadIn"
        needleTransitionDuration={1000}
        needleColor="red"
        startColor="green"
        segments={10}
        endColor="blue"
      />
    </div>
  );
};

export default UltrasonicGauge;
