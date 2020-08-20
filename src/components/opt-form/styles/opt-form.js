import styled from 'styled-components';

export const Container = styled.div``;

export const Input = styled.input``;

export const Button = styled.button`
    background: black;

    img {
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 600px) {
            width: 16px;
        }
    }
`;

export const Text = styled.p`
    color: red;
`;