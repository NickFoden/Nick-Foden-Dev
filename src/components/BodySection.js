import React from "react"
import styled from "styled-components"
import AppCarousel from "./AppCarousel"

const StyledSection = styled.section`
  margin: 25px;
  text-align: left;
  & h4 {
    margin: 25px;
  }
  & p {
    margin: 25px;
    max-width: 500px;
  }
`

const StyledContainer = styled.div`
  width: 100vw;
`

const StyledCarouselContainer = styled.section`
  margin: 35px;
`

const BodySection = () => (
  <StyledContainer>
    <StyledSection>
      <h4>Hello new friend!</h4>
      <h2>I’m Nick.</h2>
      <p>
        I grew up in the California Bay Area and now live in New York. I like
        🐕's, solving problems, more 🐶's also 🐢's.{" "}
      </p>
    </StyledSection>
    <StyledCarouselContainer>
      <AppCarousel />
    </StyledCarouselContainer>
  </StyledContainer>
)

export default BodySection
