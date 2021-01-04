import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { FirebaseContext } from "../context/firebase"
import { Form } from "../components"
import * as ROUTES from "../constants/routes"

export default function SignInContainer() {
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()
  const [error, setError] = useState(null)
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")

  const isInvalid = emailAddress === "" || password === ""

  const handleSignin = (event) => {
    event.preventDefault()

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE)
      })
      .catch((err) => {
        setEmailAddress("")
        setPassword("")
        setError(err.message)
      })
  }

  // For demo purposes only - allows to sign in with default user
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
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSignin}>
          <Form.Input
            placeholder="Email address"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Form.Input
            type="password"
            placeholder="Password"
            value={password}
            autoComplete="off"
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.SubmitButton disabled={isInvalid} type="submit">
            Sign In
          </Form.SubmitButton>

          <Form.Text>
            New to Netflix?{" "}
            <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA.
          </Form.TextSmall>
          <Form.TextSmall>
            Author Note for Demo: Authentication provided through Firebase, but
            email verification has been turned off. You can register with an
            arbitrary email or click below to bypass authentication.
          </Form.TextSmall>
          <Form.SubmitButton onClick={bypassSignin}>
            Skip Sign In
          </Form.SubmitButton>
        </Form.Base>
      </Form>
    </>
  )
}
