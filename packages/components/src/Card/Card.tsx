import * as React from "react"
import glamorous from "glamorous"
import { CardHeader } from "../index"

import { WithTheme, Css, CssStatic } from "../types"

export interface Props {
  /** DOM id attribute, useful for hash linking */
  id?: string
  /** `css` prop as expected in a glamorous component */
  css?: Css
  className?: string
  children?: React.ReactNode
  /** Component containing buttons/links/actions assigned to the card */
  action?: React.ComponentType
  /** Shortcut for adding a title to the card header */
  title?: string
}

const Container = glamorous.div(
  ({ theme }: WithTheme): CssStatic => ({
    label: "card",
    borderTop: "1px solid #ececec",
    padding: 20,
    boxShadow: theme.shadows.card,
    backgroundColor: theme.colors.white,
    "& > img": {
      maxWidth: "100%",
    },
  }),
)

const Card = (props: Props) => (
  <Container id={props.id} css={props.css} className={props.className}>
    {(props.title || props.action) && (
      <CardHeader>
        {props.title && props.title}
        {props.action && <div>{<props.action />}</div>}
      </CardHeader>
    )}
    {props.children}
  </Container>
)

export default Card
