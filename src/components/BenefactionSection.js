import React, { Component } from "react"
import { StyledContainer, StyledSection } from "../css"
import Benefaction from "./Benefaction"
import Benefactions from "../content/benefactions"

export default class BenefactionSection extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledSection id="pod">
          <h3>Benefactions</h3>
          <p>
            <ul className="ul-pod">
              {Benefactions.map(benefaction => {
                return (
                  <li key={benefaction.id}>
                    <Benefaction benefaction={benefaction} />
                  </li>
                )
              })}
            </ul>
          </p>
          <br />
        </StyledSection>
      </StyledContainer>
    )
  }
}
