import { useState, useEffect } from "react"
import GaugeGraphHybrid from "../Components/Machine/GaugeGraphHybrid"

function Machine() {
  // const [temp, setTemp] = useState(0)
  // const [timestamps, setTimestamps] = useState([])
  const [epoch, setEpoch] = useState(0)
  const [temp, setTemp] = useState([{
    value: 0,
    timestamp: ''
  }])
  useEffect(() => {
    (async () => {
      const response = await fetch('http://192.168.90.71:3001/sensor-data')
      const { data } = await response.json()
      let delay = 700
      for (let element of data) {
        setTimeout(() => setTemp(temp => {
          temp.shift()
          temp.push({
            value: element.A.Temperature,
            timestamp: element.A.Timestamp.split(' ')[1]
          })
          return temp
        }), delay)
        delay += 700
      }
    })()
    setEpoch(epoch => epoch + 1)
  }, [epoch])

  return (
    <div className="px-4 md:px-16">
      <p className="text-gray-700 text-3xl mb-16 font-bold">Machine</p>
      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <GaugeGraphHybrid
          arr={temp}
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