import React from 'react';
import { Accordion } from '../components';
import { OptForm } from '../components'
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame> {/* Holds Items Map */}
                {faqsData.map(item => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame>

            <OptForm>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>
                    <OptForm.Text>Try It</OptForm.Text>
                </OptForm.Button>
            </OptForm>
        </Accordion>
    )
}