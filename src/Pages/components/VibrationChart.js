import React, {useState} from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useQuery } from "react-query";
import axios from "axios";

export default function VibrationChart() {
  // const fetchVisData = () => {
  //   axios.get("http://192.168.90.71:3001/#").then((res) => {
  //     setTempData(res.data.data);
  //     // setLoading(false);
  //   })
  // };

  // const { data } = useQuery("data", fetchVisData, {cacheTime: 4000});

  // const [TempData, setTempData] = useState(data);
  // console.log(TempData);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        // data={}

        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="linear"
          dataKey="Vibration X"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </ResponsiveContainer>
  );
}
