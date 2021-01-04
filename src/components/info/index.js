import React from "react"
import {
  Container,
  Title,
  SubTitle,
  Text,
  List,
  Group,
  Item,
  ImageSelect,
  Form,
  Input,
  SubmitButton,
} from "./styles/info"

export default function Info({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Info.Title = function InfoTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Info.SubTitle = function InfoSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Info.Text = function InfoText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Info.List = function InfoList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>
}

Info.Group = function InfoGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Info.Item = function InfoItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Info.ImageSelect = function InfoImageSelect({ src, ...restProps }) {
  return <ImageSelect {...restProps} src={`images/users/${src}.png`} />
}

Info.Form = function InfoForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>
}

Info.Input = function InfoInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>
}

Info.SubmitButton = function InfoSubmitButton({ children, ...restProps }) {
  return <SubmitButton {...restProps}>{children}</SubmitButton>
}

Info.SubmitButton = function InfoSubmitButton({ children, ...restProps }) {
  return <SubmitButton {...restProps}>{children}</SubmitButton>
}
