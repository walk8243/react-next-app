import * as React from 'react'
import type { NextPage } from 'next'
import Paper from '@mui/material/Paper'
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui'

const data = [
  { argument: 1, value: 10 },
  { argument: 2, value: 20 },
  { argument: 3, value: 30 },
]

const ReactChart: NextPage = () => (
  <Paper>
    <Chart
      data={data}
    >
      <ArgumentAxis />
      <ValueAxis />

      <LineSeries valueField="value" argumentField="argument" />
    </Chart>
  </Paper>
)

export default ReactChart
