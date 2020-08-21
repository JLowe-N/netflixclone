import React from 'react';
import { HeaderContainer } from '../containers/header'
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs'
import { FooterContainer } from '../containers/footer';


// const jumboData = jumboJSON.JSON()
// console.log(jumboData)

export default function Home() {
    return (
        <>
            <HeaderContainer><p>Hi there</p></HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />

        </>
    )
}