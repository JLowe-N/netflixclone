/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000000;
        color: #333333;
        font-size: 16px;
        margin: 0;
    }

    input:focus + label,
    input:not(:placeholder-shown) + label {
        color: #111;
        transform: translate(-27rem, 0.5rem);

        @media (max-width: 1100px) {
            transform: translate(-13rem, -4rem);
        }
    }
`
