import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const styles = {
  dial: {
    display: "inline-block",
    width: `200px`,
    height: `auto`,
    color: "#000",
    border: "0.5px solid #fff",
    padding: "2px"
  },
  title: {
    fontSize: "1em",
    color: "#000"
  }
};

// use media queries to make the speedometer responsive
// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize

const Speedometer = ({ id, value, title }) => {
  return (
    <div style={styles.dial}>
      <ReactSpeedometer
        maxValue={120}
        minValue={-100}
        height={490}
        width={600}
        value={value}
        needleTransition="easeQuadIn"
        needleTransitionDuration={1000}
        needleColor="red"
        startColor="green"
        segments={10}
        endColor="blue"
      />
      <div style={styles.title}>{title}</div>
    </div>
  );
};

export default Speedometer;
