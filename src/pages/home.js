import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs'
import { FooterContainer } from '../containers/footer';


// const jumboData = jumboJSON.JSON()
// console.log(jumboData)

export default function Home() {
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />

        </>
    )
}