import React from "react"
import styled from "styled-components"
import AppCarousel from "./AppCarousel"
import { Link } from "gatsby"

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
  padding-left: 50px;
`

const BodySection = () => (
  <StyledContainer>
    <StyledSection>
      <h4>Hello new friend!</h4>
      <Link to="/about/">
        <h2>I’m Nick.</h2>
      </Link>
      <p>
        I grew up in the California Bay Area and now live in New York. I like
        <span role="img" aria-label="dog">
          {" "}
          🐕{" "}
        </span>
        's, solving problems, more
        <span role="img" aria-label="dog face">
          {" "}
          🐶{" "}
        </span>
        's also{" "}
        <span role="img" aria-label="turtle">
          {" "}
          🐢{" "}
        </span>
        's.{" "}
      </p>
    </StyledSection>
    <StyledCarouselContainer>
      <AppCarousel />
    </StyledCarouselContainer>
  </StyledContainer>
)

export default BodySection
