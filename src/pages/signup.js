import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { FirebaseContext } from "../context/firebase"
import HeaderContainer from "../containers/header"
import FooterContainer from "../containers/footer"
import { Form } from "../components"
import * as ROUTES from "../constants/routes"

export default function SignUp() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [firstName, setFirstName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    setEmailAddress(history.location.data)
  }, [history.location.data])

  const isInvalid = firstName === "" || emailAddress === "" || password === ""

  const handleSignup = (e) => {
    e.preventDefault()

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        })
      })
      .then(() => {
        history.push(ROUTES.BROWSE)
      })
      .catch((err) => {
        setEmailAddress("")
        setPassword("")
        setError(err.message)
      })
  }

  const bypassSignin = (event) => {
    event.preventDefault()

    firebase
      .auth()
      .signInWithEmailAndPassword("JLowe-N@test.com", "test123456")
      .then(() => {
        history.push(ROUTES.BROWSE)
      })
      .catch((err) => {
        setEmailAddress("")
        setPassword("")
        setError(err.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
              placeholder="First name"
            />
            <Form.Input
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
              placeholder="Email address"
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              onChange={({ target }) => setPassword(target.value)}
              placeholder="Password"
            />
            <Form.SubmitButton disabled={isInvalid}>Sign Up</Form.SubmitButton>

            <Form.Text>
              Already a user?{" "}
              <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
          <Form.Base onSubmit={bypassSignin}>
            <Form.TextSmall>
              Author Note for Demo: Authentication provided through Firebase,
              but email verification has been turned off. You can register with
              an arbitrary email or click below to bypass authentication.
            </Form.TextSmall>
            <Form.SubmitButton type="submit">Skip Sign In</Form.SubmitButton>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
