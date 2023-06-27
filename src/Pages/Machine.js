import { useState, useEffect } from "react";
import Gauge from "../Components/Machine/Gauge";
import { tempData } from "../data/tempData";


function Machine() {
  const [temp, setTemp] = useState(0)
  useEffect(() => {
    (async () => {
      let delay = 500
      tempData.map(ele => {
        setTimeout(() => setTemp(ele.Temparature), delay)
        delay += 500
        return null
      })
    })()
  }, [])

  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-16 font-bold">Machine</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <Gauge
          value={temp}
          minValue={0}
          maxValue={100}
          breaks={[40, 70]}
          unit={'°C'}
        />
      </div>
      <div className="grid col-1 bg-white h-96 shadow"></div>
    </div>
  );
}

export default Machine;