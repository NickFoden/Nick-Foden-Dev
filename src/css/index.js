import styled from "styled-components"

export const StyledCarouselContainer = styled.section`
  margin: 35px;
  padding-left: 50px;
  @media (min-width: 768px) {
    margin: 35px 150px 50px;
  }
  @media (min-width: 1200px) {
    margin: 35px 300px 50px;
    padding-left: 100px;
  }
`

export const StyledContainer = styled.div`
  width: 100vw;
`
export const StyledBackToTop = styled.a`
  color: white;
  margin-left: 50px;
`

export const StyledSection = styled.section`
  margin: 25px;
  text-align: left;
  & h4 {
    margin: 25px;
  }
  & p {
    margin: 25px;
    max-width: 500px;
  }
  @media (min-width: 768px) {
    margin: 25px 150px;
    & p {
      max-width: 600px;
    }
  }
  @media (min-width: 1200px) {
    margin: 25px 300px;
    & p {
      max-width: 800px;
    }
  }
`
