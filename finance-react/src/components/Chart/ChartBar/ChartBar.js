import './ChartBar.css'

export const ChartBar = ({value, amount, label}) => {
  let barFillHeight = '0%'

  if (amount > 0) {
    barFillHeight = Math.round((value / amount) * 100) + '%'
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}/>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  )
}
