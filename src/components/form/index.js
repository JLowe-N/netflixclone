import React from 'react';
import { Container, Title, Text, Input, SubmitButton, Error } from './styles/form'

export default function Form({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Form.Title = function FormTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Form.Text = function FormText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Form.Input = function FormInput({...restProps}) {
    return <Input {...restProps} />
}

Form.SubmitButton = function FormSubmitButton({ children, ...restProps}) {
    return <SubmitButton {...restProps}>{children}</SubmitButton>
}

Form.Error = function FormError({children, ...restProps}) {
    return <Error {...restProps}>{children}</Error>
}

