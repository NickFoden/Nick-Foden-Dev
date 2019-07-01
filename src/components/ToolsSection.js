import React, { Component } from "react"
import { StyledBackToTop, StyledContainer, StyledSection } from "../css"
import Tools from "../content/tools"

export default class ToolsSection extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledSection id="tools">
          <h3>Tools</h3>
          <p>
            <ul className="ul-tools">
              {Tools.map(tool => {
                return <li key={tool}>{tool},</li>
              })}
            </ul>
          </p>
          <br />
        </StyledSection>
      </StyledContainer>
    )
  }
}
