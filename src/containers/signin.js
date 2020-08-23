import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';


export function SignInContainer({children}) {
    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();
    const [error, setError] = useState(null);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const isInvalid = emailAddress === '' | password === '';

    const handleSignin = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                setEmailAddress('');
                setPassword('');
                setError('');
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => setError(error.message)); 
        

    }

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
                    New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA.
                </Form.TextSmall>
            </Form.Base>
        </Form>
    )
}