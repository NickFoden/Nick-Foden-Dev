import React from "react"
import AppCarousel from "./AppCarousel"
import { StyledCarouselContainer, StyledContainer, StyledSection } from "../css"

const BodySection = () => (
  <StyledContainer>
    <StyledSection id="welcome">
      <h4>Hello new friend!</h4>
      <a href="#about" title="Jump to About Nick">
        <h2>I’m Nick.</h2>
      </a>
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
