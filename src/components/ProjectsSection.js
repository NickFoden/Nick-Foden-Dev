import React, { Component } from "react"
import { StyledContainer, StyledSection } from "../css"
import Project from "./Project"
import Projects from "../projects/projects"

export default class AboutSection extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledSection id="projects">
          <h3>Projects</h3>
          <ul style={{ listStyle: "none" }}>
            {Projects.map(project => {
              return (
                <li key={project.id}>
                  <Project project={project} />
                </li>
              )
            })}
          </ul>
        </StyledSection>
      </StyledContainer>
    )
  }
}
