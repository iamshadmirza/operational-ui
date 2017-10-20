import * as React from "react"
import { Route, withRouter } from "react-router-dom"

import { Card, CardHeader } from "contiamo-ui-components"
import Canvas from "../../components/Canvas/Canvas"
import Sidebar, { ISidebarLink } from "../../components/Sidebar/Sidebar"
import StaticContent from "../../components/StaticContent/StaticContent"

import { ProcessFlowCases, ProcessFlowTest } from "./ProcessFlows/ProcessFlows"
import * as processFlowCases from "./ProcessFlows/cases/index"

const SidebarWithRouter = withRouter(Sidebar)

const introContent: string = `
This is an extensive collection of visualizations. Click one on the sidebar to get started.
`

const Intro = () => (
  <Card>
    <CardHeader>Visualizations overview</CardHeader>
    <StaticContent markdownContent={introContent} />
  </Card>
)

const links: ISidebarLink[] = [
  {
    label: "Process Flow",
    links: Object.keys(processFlowCases)
      .map(key => ({ url: `/visualizations/process-flow/cases/${key}`, label: key }))
      .concat([{ label: "Visual test", url: "/visualizations/process-flow/test" }])
  },
  {
    label: "Bar chart",
    links: []
  }
]

export default () => (
  <div>
    <SidebarWithRouter links={links} css={{ height: "100%" }} />
    <Canvas>
      <Route exact path="/visualizations" component={Intro} />
      <Route path="/visualizations/process-flow/cases/:case" component={ProcessFlowCases} />
      <Route exact path="/visualizations/process-flow/test" component={ProcessFlowTest} />
    </Canvas>
  </div>
)