import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom'

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` :
        '../images/misc/home-bg.jpg')}) top left / cover no-repeat;

    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
    }
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;


export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;
    
    @media (max-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({active}) => active ? '700' : 'normal'};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    border-radius: 3px;
    width: 84px;
    color: white;
    height: fit-content;
    border: 0;
    font-size: 15px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background: #f40612;
    }
`;

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`

export const Group = styled.div`
    display: flex;
    align-items: center;
`;
