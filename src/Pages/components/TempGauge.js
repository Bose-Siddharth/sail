import React, {useState} from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { useQuery } from "react-query";
import axios from "axios";
// import { tempData } from './../../data/tempData';

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

// use media queries to make the speedometer responsive
// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize

const Speedometer = ({ id, value, title }) => {
  const setFlexData = () => {
    axios.get("http://192.168.90.71:3001/#").then((res) => {
      setTempData(res.data.data[4].A.Temperature);
      // setLoading(false);
    })
  };

  const { data } = useQuery("data", setFlexData, {refetchInterval: 2000});
  const [TempData, setTempData] = useState(data);
  
 
  return (
    <div style={styles.dial} >
      <ReactSpeedometer
        maxValue={50}
        minValue={20}
        height={490}
        width={600}
        value={TempData}
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

export default Speedometer;
