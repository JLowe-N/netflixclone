import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`

// Need to set margin/padding to 0, because when UL OL reset they rerender at 0.
export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`

// need hidden black border, otherwise appears to move on hover
export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover > ${Name} {
    font-weight: bold;
    color: #e5e5e5;
  }

  &:last-of-type {
    margin-right: 0;
  }
`
