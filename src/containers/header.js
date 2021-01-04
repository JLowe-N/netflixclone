import React from "react"
import { Header } from "../components"
import * as ROUTES from "../constants/routes"

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          src="/images/misc/logo.svg"
          alt="Netflix"
        />
        <Header.Group>
          <Header.ExternalButtonLink
            target="_blank"
            href="https://github.com/JLowe-N/netflixclone"
          >
            See Repo
          </Header.ExternalButtonLink>
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Group>
      </Header.Frame>
      {children}
    </Header>
  )
}
