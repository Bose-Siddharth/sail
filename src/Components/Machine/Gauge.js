import GaugeComponent from "react-gauge-component"

const Gauge = ({ value, minValue, maxValue, breaks, unit }) => {
  const limits = [...breaks, maxValue]
  const colors = ['#5be12c', '#f5cd19', '#ea4228']
  const formatTextValue = value => value + " " + unit

  return (<div className="h-min bg-slate-900 bg-gradient-to-r rounded shadow">
    <GaugeComponent
      type="radial"
      value={value}
      minValue={minValue}
      maxValue={maxValue}
      style={{
        width: "80%",
        height: "auto",
        margin: "2% auto"
      }}
      arc={{
        subArcs: limits.map((value, index) => ({
          limit: value,
          color: colors[index],
          showMark: true
        }))
      }}
      labels={{
        valueLabel: { formatTextValue },
        markLabel: {
          type: "outer",
          marks: limits.map(limit => ({ value: limit })),
          valueConfig: { formatTextValue }
        }
      }}
      pointer={{
        elastic: true,
        animationDelay: 0,
        color: "white"
      }}
    />
  </div>)
}

export default Gauge