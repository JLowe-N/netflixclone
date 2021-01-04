import styled from "styled-components"
import { Link as ReactRouterLink } from "react-router-dom"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`

export const ButtonLink = styled(ReactRouterLink)`
  display: flex;
  text-decoration: none;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;

  a {
    text-decoration: none;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    border-radius: 1px;
    margin-top: 20px;
  }

  &:hover {
    background: #f40612;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }
`

export const Text = styled.p`
  color: white;
  font-size: 19px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`
