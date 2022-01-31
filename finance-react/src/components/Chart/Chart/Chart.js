import { ChartBar } from "../ChartBar/ChartBar"

import "./Chart.css"

export const Chart = ({dataPoints, amount}) => {

  return (
    <div className="chart">
      {
        dataPoints.map(dataPoint =>
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            amount={amount}
            label={dataPoint.label}
          />)
      }
    </div>
  )
}
