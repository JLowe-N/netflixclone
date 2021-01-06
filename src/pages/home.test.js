import React from "react"
import ReactDOM from "react-dom"
import { MemoryRouter } from "react-router-dom"
import Home from "./home"

test("renders without crashing", () => {
  const root = document.createElement("div")
  document.body.appendChild(root)
  ReactDOM.render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
    root
  )
})
