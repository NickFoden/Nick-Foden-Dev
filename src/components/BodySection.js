import React from "react"
import AppCarousel from "./AppCarousel"
import { StyledCarouselContainer, StyledContainer, StyledSection } from "../css"
import "../css/styles.css"

const BodySection = () => (
  <StyledContainer>
    <StyledSection id="welcome">
      <h4>Hello new friend!</h4>
      <h5>
        <span role="img" aria-label="construction">
          🚧
        </span>{" "}
        This site (Gatsby) is 2+ years old. Debating what to build the 2021
        version with. Next.js has been my solid goto for while now, but yeah
        thinking 11ty or maybe html or django or hmmmm.
      </h5>
      <h5>
        Blogging @
        <a
          href="https://nickfoden.com"
          title="nickfoden.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          nickfoden.com
        </a>
      </h5>
      <a href="#about" title="Jump to About Nick">
        <h2>I’m Nick.</h2>
      </a>
      <p>
        I grew up in the California Bay Area and now live in New York. I like
        <span role="img" aria-label="dog">
          {" "}
          🐕{" "}
        </span>
        s,{" "}
        <a
          href="https://github.com/nickfoden"
          id="blog-link"
          rel="noopener noreferrer"
          target="_blank"
          title="nickfoden on github"
        >
          {" "}
          solving problems
        </a>
        , more
        <span role="img" aria-label="dog face">
          {" "}
          🐶{" "}
        </span>
        s also{" "}
        <span role="img" aria-label="turtle">
          {" "}
          🐢{" "}
        </span>
        s.{" "}
      </p>
    </StyledSection>
    <StyledCarouselContainer>
      <AppCarousel />
    </StyledCarouselContainer>
  </StyledContainer>
)

export default BodySection
