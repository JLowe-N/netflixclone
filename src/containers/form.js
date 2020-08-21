import React from 'react';
import { Form } from '../components';

export function FormContainer({children}){
    return (
        <Form>
            <Form.Title>My Form</Form.Title>
            <Form.Text>Please log in:</Form.Text>
            <Form.Input />
            <Form.SubmitButton>Log In</Form.SubmitButton>
        </Form>
    )
}