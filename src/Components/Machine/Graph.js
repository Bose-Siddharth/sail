import { useState} from "react"
import Chart from "react-apexcharts"

const Graph = ({ dataArr }) => {
  const [options] = useState({
    chart: {
      id: "xyz",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0
      }
    },
    xaxis: {
      categories: dataArr.map(element => element.timestamp),
    }
  })

  return (
    <div className="w-96">
      <Chart options={options} series={{
        name: "X-axis",
        data: dataArr.map(element => element.value)
      }} type="area" />
    </div>
  )
}

export default Graph;
