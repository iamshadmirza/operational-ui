import * as React from "react"
import glamorous from "glamorous"

interface PropsSet {
  name: string | React.ReactElement<any>
  description?: string
  defaultValue: string | React.ReactElement<any>
  type?: string
  optional?: boolean
}

type Props = {
  css?: {}
  className?: string
  props?: Array<PropsSet>
}

const Table = glamorous.table(({ theme }: { theme: Theme }): any => ({
  border: 0,
  borderCollapse: "collapse",
  textAlign: "left",
  backgroundColor: "white",
  "& th": {
    border: `1px solid ${theme.colors.grey10}`
  },
  "& td": {
    border: `1px solid ${theme.colors.grey20}`
  },
  "& td, & th": {
    padding: theme.spacing / 2
  },
  "& tr:nth-child(even)": {
    backgroundColor: theme.colors.grey10
  }
}))

const PropsTable = ({ className, props }: Props) => (
  <Table className={className}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Default</th>
        <th>Type</th>
        <th>Optional?</th>
      </tr>
    </thead>
    <tbody>
      {/* I do [...props].map below to make sure we're ACTUALLY working with an array. */}
      {props ? (
        [...props].map(({ name, description, defaultValue, type, optional }, index) => (
          <tr key={index}>
            <td>{name}</td>
            <td>{description}</td>
            <td>{defaultValue}</td>
            <td>{type}</td>
            <td>{optional ? "✅" : "🚫"}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5}>There seem to be no props. 😿</td>
        </tr>
      )}
    </tbody>
  </Table>
)

export default PropsTable