import React from "react"
import ReactDOM from "react-dom"
import { MemoryRouter } from "react-router-dom"
import { render, fireEvent } from "@testing-library/react"

import Home from "./home"

test("renders home without crashing", () => {
  const root = document.createElement("div")
  ReactDOM.render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
    root
  )
})

test("home user experience flow is accessible", () => {
  const { getAllByText } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )

  const input = getAllByText("Try 30 Days Free")
  fireEvent.change(input, { target: { value: "user@email.com" } })

  getAllByText("user@email.com")
})
