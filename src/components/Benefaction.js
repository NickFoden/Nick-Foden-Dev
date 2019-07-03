import React from "react"
import styled from "styled-components"

const StyledImage = styled.img`
  border: 1.5px solid lightgray;
  cursor: pointer;
  height: 75px;
  margin: 5px;
  object-fit: fill;
  width: 75px;
  transition: border-color 0.25s ease-in-out;
  & :hover {
    border-color: lightseagreen;
    opacity: 0.5;
  }
`

const Benefaction = ({ benefaction }) => {
  return (
    <div>
      <a
        href={benefaction.link}
        rel="noopener noreferrer"
        target="_blank"
        title={`View the ${benefaction.title} website`}
      >
        <StyledImage alt={benefaction.title} src={benefaction.image} />
      </a>
    </div>
  )
}

export default Benefaction
