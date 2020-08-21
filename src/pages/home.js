import React from 'react';
import { Feature, OptForm } from '../components'
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs'
import { FooterContainer } from '../containers/footer';


// const jumboData = jumboJSON.JSON()
// console.log(jumboData)

export default function Home() {
    return (
        <>
            <HeaderContainer>
            <Feature>
                    <Feature.Title>Unlimited movies, TV, shows, and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Try 30 Days Free</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />

        </>
    )
}