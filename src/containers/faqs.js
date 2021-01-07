import React from "react"
import { Accordion, OptForm } from "../components"
import faqsData from "../fixtures/faqs.json"

export default function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {" "}
        {/* Holds Items Map */}
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Group>
          <OptForm.Input
            type="email"
            id="id_email_faqs"
            placeholder=" "
            autoComplete="email"
            minLength="5"
            maxLength="50"
          />
          <OptForm.Label
            floating="true"
            htmlFor="id_email_faqs"
            className="placeLabel"
          >
            Email Address
          </OptForm.Label>
          <OptForm.ButtonLink>Try 30 Days Free</OptForm.ButtonLink>
        </OptForm.Group>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  )
}
