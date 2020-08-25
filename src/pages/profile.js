import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';

export default function Profile() {
    const [ avatar, setAvatar ] = useState(null)

    return (
        <>
            <HeaderContainer />
            <p> Please select a profile image:</p>
            <img src="images/users/1.png" alt="Avatar 1" />
            <img src="images/users/2.png" alt="Avatar 2" />
            <img src="images/users/3.png" alt="Avatar 3" />
            <img src="images/users/4.png" alt="Avatar 4" />
            <img src="images/users/5.png" alt="Avatar 5" />
            <button>Update Avatar</button>
            <FooterContainer />
        </>
    )
}
