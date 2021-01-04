import styled from "styled-components"
import { Link as ReactRouterLink } from "react-router-dom"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 660px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    box-sizing: border-box;
    margin: auto;
    width: 100%
    max-width: 450px;
    padding: 60px 68px 40px;
    margin-bottom: 100px;
`

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`

export const Text = styled.h1`
  color: #737373;
  font-size: 139x;
  font-weight: 500;
`

export const TextSmall = styled.h2`
  color: #8c8c8c;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`

export const SubmitButton = styled.button`
  background: #e50914;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background: #f40612;
  }
`

export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`
