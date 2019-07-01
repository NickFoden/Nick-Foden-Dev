import React, { Component } from "react"
import { StyledContainer, StyledSection } from "../css"

export default class AboutSection extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledSection id="projects">
          <h3>Projects</h3>
          <ul>
            <li>Project 1</li>
          </ul>
        </StyledSection>
      </StyledContainer>
    )
  }
}
