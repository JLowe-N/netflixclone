import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || emailAddress === '' || password === '';

    const handleSignup = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: (Math.floor() * 5 ) + 1
                })
                .then(() => {
                    setEmailAddress('');
                    setPassword('');
                    setError('');
                    history.push(ROUTES.BROWSE);
                })
            ).catch((error) => setError(error.message)); 
    };



    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                        value={firstName}
                        onChange={({target})=>setFirstName(target.value)}
                        placeholder="First name"/>
                        <Form.Input
                        value={emailAddress}
                        onChange={({target})=>setEmailAddress(target.value)}
                        placeholder="Email address"/>
                        <Form.Input
                        type="password"
                        value={password}
                        autoComplete="off"
                        onChange={({target})=>setPassword(target.value)}
                        placeholder="Password"/>
                        <Form.SubmitButton disabled={isInvalid}>
                            Sign Up
                        </Form.SubmitButton>

                        <Form.Text>
                            Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>

                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}