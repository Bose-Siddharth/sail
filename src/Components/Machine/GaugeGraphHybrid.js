import { useState } from "react"
import Gauge from "./Gauge"
import Graph from "./Graph"

const GaugeGraphHybrid = ({ arr, minValue, maxValue, breaks, unit }) => {
  const [isGauge, setIsGauge] = useState(true)
  const toggle = () => setIsGauge(isGauge => !isGauge)

  return (<div>
    {isGauge
      ?
      <Gauge
        value={arr[arr.length - 1].value}
        minValue={minValue}
        maxValue={maxValue}
        breaks={breaks}
        unit={unit}
      />
      :
      <Graph dataArr={arr} />
    }
    <button
      type="button"
      className=" w-36 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={toggle}
    >{isGauge ? 'View Graph' : 'View Gauge'}</button>
  </div>)
}

export default GaugeGraphHybrid