import React from "react"
import HeaderContainer from "../containers/header"
import SignInContainer from "../containers/signin"
import FooterContainer from "../containers/footer"

export default function SignIn() {
  return (
    <>
      <HeaderContainer>
        <SignInContainer />
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
