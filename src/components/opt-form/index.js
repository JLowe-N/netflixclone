import React, { useState, useContext, createContext } from "react"
import {
  Container,
  Label,
  Group,
  Input,
  ButtonLink,
  Text,
  Break,
} from "./styles/opt-form"

const OptContext = createContext()

export default function OptForm({ children, ...restProps }) {
  const [inputState, setInputState] = useState("")

  return (
    <OptContext.Provider value={{ inputState, setInputState }}>
      <Container {...restProps}>{children}</Container>
    </OptContext.Provider>
  )
}

OptForm.Label = function OptFormLabel({
  children,
  floating = false,
  ...restProps
}) {
  return (
    <Label floating={floating} {...restProps}>
      {children}
    </Label>
  )
}

OptForm.Group = function OptFormGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

OptForm.Input = function OptFormInput({ children, ...restProps }) {
  const { inputState, setInputState } = useContext(OptContext)

  return (
    <Input
      value={inputState}
      onChange={({ target }) => setInputState(target.value)}
      {...restProps}
    />
  )
}

OptForm.ButtonLink = function OptFormButtonLink({ children, ...restProps }) {
  const { inputState } = useContext(OptContext)

  return (
    <ButtonLink
      to={{
        pathname: "/signup",
        data: inputState,
      }}
      {...restProps}
    >
      {children} <img src="images/icons/chevron-right.png" alt="Try Now" />
    </ButtonLink>
  )
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

OptForm.Break = function OptFormBreak({ children, ...restProps }) {
  return <Break {...restProps} />
}
