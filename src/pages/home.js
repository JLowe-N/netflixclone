import React from "react"
import { Feature, OptForm } from "../components"
import HeaderContainer from "../containers/header"
import JumbotronContainer from "../containers/jumbotron"
import FaqsContainer from "../containers/faqs"
import FooterContainer from "../containers/footer"

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV, shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <OptForm>
            <OptForm.Group>
              <OptForm.Input
                type="email"
                id="id_email_hero"
                placeholder=" "
                autoComplete="email"
                minLength="5"
                maxLength="50"
              />
              <OptForm.Label
                floating="true"
                htmlFor="id_email_hero"
                className="placeLabel"
              >
                Email Address
              </OptForm.Label>
              <OptForm.ButtonLink>Try 30 Days Free</OptForm.ButtonLink>
            </OptForm.Group>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}
