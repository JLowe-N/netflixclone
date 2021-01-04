import React from "react"
import {
  Item,
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
} from "./styles/jumbotron"

/* Pass & destructure component children, direction for reusability/flexibility
 * Also use spread operator to allow developer to use API as they see fit
 * Spread operator will capture any additional components
 */
export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>{" "}
    </Item>
  )
}

// Key to Compound Components Design Pattern
Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />
}
