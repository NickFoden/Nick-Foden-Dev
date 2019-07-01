import React, { useState } from "react"
import { Transition } from "react-transition-group"
import styled from "styled-components"

const StyledImage = styled.img`
  border: 1.5px solid lightgray;
  cursor: pointer;
  height: auto;
  width: 250px;
  transition: border-color 0.25s ease-in-out;
  & :hover {
    border-color: #42f5d4;
  }
`

const StyledP = styled.p`
  color: white;
`
const StyledRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 500px;
  & a {
    color: #adbbf0;
  }
`

const StyledTitle = styled.h4`
  color: #6f8df7;
  font-size: 1.5rem;
`

const Project = ({ project }) => {
  const [open, handleChange] = useState(false)
  const duration = 500

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }
  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0.5 },
    exited: { opacity: 0 },
  }

  return (
    <section>
      <StyledTitle>{project.title}</StyledTitle>
      <StyledP>{project.subTitle}</StyledP>
      <StyledImage
        alt={project.title}
        src={project.image}
        onClick={() => handleChange(!open)}
      />

      <Transition
        in={open}
        timeout={duration}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        {open => (
          <div style={{ ...defaultStyle, ...transitionStyles[open] }}>
            <StyledP>{project.summary}</StyledP>
            <StyledRow>
              <a
                href={project.siteLink}
                rel="noopener noreferrer"
                target="_blank"
                title={`View the ${project.title} website`}
              >
                View Project
              </a>
              {project.sourceLink && (
                <a
                  href={project.sourceLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={`View the repo for ${project.title}`}
                >
                  View Source
                </a>
              )}
            </StyledRow>
          </div>
        )}
      </Transition>
    </section>
  )
}

export default Project
