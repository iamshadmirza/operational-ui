import Layout from "../../../../components/Layout"
import { PieChart } from "@operational/visualizations"
import Marathon from "../../../../components/Marathon"
import { Card, CardHeader } from "@operational/components"

const colors: any = {
  Berlin: "#1499CE"
}

const GaugeRenderer = {
  type: "gauge",
  extent: "full",
  target: 50,
  key: d => d.key,
  value: d => d.value,
  color: d => colors[d.key]
}

const data = {
  data: [{ key: "Berlin", value: 35 }],
  renderAs: [GaugeRenderer]
}

const data1 = {
  data: [{ key: "Berlin", value: 14 }],
  renderAs: [GaugeRenderer]
}

const data2 = {
  data: [{ key: "Berlin", value: 72 }],
  renderAs: [GaugeRenderer]
}

const data3 = {
  data: [{ key: "Berlin", value: 41 }],
  renderAs: [GaugeRenderer]
}

export const marathon = ({ test, afterAll, container }) => {
  const viz = new PieChart(container)

  test("Renders the chart", () => {
    viz.data(data)
    viz.draw()
  })

  test("Updates the data", () => {
    viz.data(data1)
    viz.draw()
  })

  test("Updates the data (value > target)", () => {
    viz.data(data2)
    viz.draw()
  })

  test("Updates the data", () => {
    viz.data(data3)
    viz.draw()
  })

  afterAll(() => {
    viz.close()
  })
}

export const title = "Updates (full)"