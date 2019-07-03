import React, { Component } from "react"
import { StyledContainer, StyledSection } from "../css"
import Podcast from "./Podcast"
import Podcasts from "../content/podcasts"

export default class PodcastSection extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledSection id="pod">
          <h3>Good Pod</h3>
          <p>
            <ul className="ul-pod">
              {Podcasts.map(pod => {
                return (
                  <li key={pod.id}>
                    <Podcast pod={pod} />
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
