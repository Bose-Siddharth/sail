import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useQuery } from "react-query";
import axios from "axios";


export default function MagneticFlux(){

    const { data } = useQuery("fluxData", () =>
    axios.get("http://localhost:3004/fluxData").then((res) => {
      setFluxData(res.data);
    //   setLoading(false);
    })
  );

  const [FluxData, setFluxData] = useState(data);
    return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={FluxData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="FluxX" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="FluxY" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      );
}