import React from "react"
import styled from "styled-components"

const StyledImage = styled.img`
  border: 1.5px solid lightgray;
  cursor: pointer;
  height: auto;
  margin: 5px;
  width: 75px;
  transition: border-color 0.25s ease-in-out;
  & :hover {
    border-color: lightseagreen;
    opacity: 0.5;
  }
`

const Podcast = ({ pod }) => {
  return (
    <div>
      <a
        href={pod.link}
        rel="noopener noreferrer"
        target="_blank"
        title={`View the ${pod.title} website`}
      >
        <StyledImage alt={pod.title} src={pod.image} />
      </a>
    </div>
  )
}

export default Podcast
