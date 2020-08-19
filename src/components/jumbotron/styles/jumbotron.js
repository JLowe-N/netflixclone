import styled from 'styled-components';

export const Inner = styled.div`
    display: flex;
    align-items: center;
`;

export const Item = styled.div``;

export const Container = styled.div``;

// title
// Semantic html points to only 1 h1 if using div, but if using sections can use
// multiple h1s
export const Title = styled.h1``; // Can't use h1 here if in div

export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;