import styled from "styled-components"

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`

export const Container = styled.section`
  background: black;

  @media (max-width: 600px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`

// title
// Semantic html points to only 1 h1 if using div, but if using sections can use
// multiple h1s
export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
` // Can't use h1 here if in div

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`
