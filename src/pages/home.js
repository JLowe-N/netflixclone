import React from 'react';
import {OptForm} from '../components'
import { HeaderContainer } from '../containers/header'
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs'
import { FooterContainer } from '../containers/footer';


// const jumboData = jumboJSON.JSON()
// console.log(jumboData)

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <OptForm>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Try 30 Days Free</OptForm.Button>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                </OptForm>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />

        </>
    )
}