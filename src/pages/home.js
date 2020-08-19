import React from 'react';
import Jumbotron from '../components/jumbotron/index'

export default function Home() {
    return (
        <Jumbotron.Container> {/* Slightly different when using Styled Components! */}
            <Jumbotron.Title>Call To ACTION</Jumbotron.Title>
            <Jumbotron.SubTitle>Mini-me Call To <em>action</em></Jumbotron.SubTitle>
            <p>I am now inside a Jumbotron</p>
        </Jumbotron.Container>
    )
}