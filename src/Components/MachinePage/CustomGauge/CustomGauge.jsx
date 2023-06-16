import React from "react";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./custom.css";

function CustomGauge({ value }) {
    const needleRef = useRef(null);
  const valueDivRef = useRef(null);
  // move the needle according to the value
  useEffect(() => {
    // console.log("value", value);
    // const needle = document.querySelector(".needle");
    // const valueDiv = document.querySelector(".wrapper-header");
    const needle = needleRef.current;
    const valueDiv = valueDivRef.current;
    needle.style.transform = `rotate(${value * 1.8}deg)`;

   
    valueDiv.innerHTML = `${value} ºC`;
  }, [value]);

  return (
    <div>
      <div className="wrapper">
        <div className="gauge">
          <div className="slice-colors">
            <div className="st slice-item" id="item-1"></div>
            <div className="st slice-item" id="item-2"></div>
            <div className="st slice-item" id="item-3"></div>
            <div className="st slice-item" id="item-4"></div>
            <div className="st slice-item" id="item-5"></div>
          </div>
          <div className="needle" ref={needleRef}></div>
          <div className="gauge-center"></div>
        </div>
        <div className="meter">
          <span className="a">0</span>
          <span className="b">20</span>
          <span className="c">40</span>
          <span className="d">60</span>
          <span className="e">80</span>
          <span className="f">100</span>
        </div>
        <h1 className="wrapper-header" ref={valueDivRef}>{value}</h1>
      </div>
    </div>
  );
}

export default CustomGauge;

CustomGauge.propTypes = {
  value: PropTypes.number.isRequired,
};
