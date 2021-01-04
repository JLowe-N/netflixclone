import React from "react"
import {
  Container,
  Base,
  Title,
  Text,
  TextSmall,
  Input,
  SubmitButton,
  Link,
  Error,
} from "./styles/form"

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>
}

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>
}

Form.SubmitButton = function FormSubmitButton({ children, ...restProps }) {
  return <SubmitButton {...restProps}>{children}</SubmitButton>
}

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>
}
