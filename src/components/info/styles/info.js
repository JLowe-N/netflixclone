import styled from "styled-components"

export const Item = styled.div``

export const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const Title = styled.p`
  font-size: 50px;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`

export const SubTitle = styled.p`
  font-size: 40px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

export const Text = styled.p`
  color: white;
  font-size: 30px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 22px;
  }
`

export const List = styled.div`
  padding: 0;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: row;
`

export const Group = styled.div``

export const ImageSelect = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 5px solid black;
  cursor: pointer;

  &:hover {
    border: 5px solid white;
  }

  ${({ highlight }) => highlight && `border: 5px solid #f40612`}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
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

  &:disabled {
    cursor: not-allowed;
  }
`

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    border-radius: 1px;
    margin-top: 20px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    background: #f40612;
  }
`
