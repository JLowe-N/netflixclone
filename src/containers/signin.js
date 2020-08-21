import React, { useState } from 'react';
import { Form } from '../components';
import { SIGN_UP } from '../constants/routes'

export function SignInContainer({children}) {
    const [error, setError] = useState(null)
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    const isValid = () => {
        if (emailAddress.length === 0 | password.length === 0) {
            setError(()=> "User and password required for log in.")
        }
    }

    const isInvalid = emailAddress === '' | password === ''

    console.log(error)

    const handleSignin = (event) => {
        event.preventDefault();
        isValid()
        // call in here to firebase to auth the user
        // if there's an error, populate the error state
    }

    console.log(emailAddress)

    return (
        <Form>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}

            <Form.Base onSubmit={handleSignin}>
                <Form.Input 
                placeholder="Email address"
                value={emailAddress}
                onChange={({target}) => setEmailAddress(target.value)}
                />
                <Form.Input
                type="password" 
                placeholder="Password"
                value={password}
                autoComplete="off"
                onChange={({target}) => setPassword(target.value)}
                />
                <Form.SubmitButton disabled={isInvalid} type="submit">
                   Sign In
                </Form.SubmitButton>

                <Form.Text>
                    New to Netflix? <Form.Link to={SIGN_UP}>Sign up now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA.
                </Form.TextSmall>
            </Form.Base>
        </Form>
    )
}