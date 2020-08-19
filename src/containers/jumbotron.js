import React from 'react';
import Jumbotron from '../components/jumbotron';
import jumboData from '../fixtures/jumbo.json'

export function JumbotronContainer() {
    return (
        <Jumbotron.Container> {/* Slightly different when using Styled Components! */}
            {jumboData.map((item) => (
                <Jumbotron key={item.id} direction={item.direction}>
                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                    <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                    <p>I am now inside a Jumbotron</p>
                </Jumbotron>
            )
            )}

        </Jumbotron.Container>
    )
}