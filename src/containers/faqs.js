import React from 'react';
import { Accordion } from '../components'
import faqsData from '../fixtures/faqs.json'

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map(el => (
                <Accordion.Pane key={el.id}>
                    <Accordion.Header>{el.header}</Accordion.Header>
                    <Accordion.Body>{el.body}</Accordion.Body>
                </Accordion.Pane>
            ))}
        </Accordion>
    )
}