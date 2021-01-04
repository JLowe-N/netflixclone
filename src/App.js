import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import * as ROUTES from "./constants/routes"
import "./App.css"
import { Home, Signin, Signup, Browse, Profile } from "./pages"
import { useAuthListener } from "./hooks"
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes"

function App() {
  const { user } = useAuthListener()

  return (
    <Router>
      <Switch>
        <ProtectedRoute user={user} path={ROUTES.PROFILE}>
          <Profile />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  )
}

export default App
