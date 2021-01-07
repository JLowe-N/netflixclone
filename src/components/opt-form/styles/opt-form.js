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
// Unintended transition during media query breakpoint
// To-do: Turn off transition during breakpoint
export const Label = styled.label`
  ${({ floating }) =>
    floating
      ? `
  display: block;
  color: #999;
  transform: translate(-27rem, 1.6rem);
  transition: transform 0.2s ease-out;

  @media (max-width: 1100px) {
    transform: translate(-13rem, -2.75rem);
  }
  `
      : null}
  width: 0px;
  overflow: visible;
  white-space: nowrap;
`

export const Group = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Input = styled.input`
  width: 450px;
  border: 0;
  padding-left: 18px;
  padding-top: 20px;
  height: 70px;
  box-sizing: border-box;
  font-size: 18px;
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
  cursor: pointer;

  @media (max-width: 1200px) {
    font-size: 20px;
  }

  a {
    text-decoration: none;
  }

  &:hover {
    background: #f40612;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
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
