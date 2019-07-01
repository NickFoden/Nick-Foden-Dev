import React, { Fragment, useState } from "react"
import styled from "styled-components"

const StyledImage = styled.img`
  cursor: pointer;
  height: auto;
  width: 250px;
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

const StyledTitle = styled.h3`
  color: #6f8df7;
`

const Project = ({ project }) => {
  const [open, handleChange] = useState(false)

  return (
    <section>
      <StyledTitle>{project.title}</StyledTitle>
      <StyledP>{project.subTitle}</StyledP>
      <StyledImage src={project.image} onClick={() => handleChange(!open)} />
      {/*   {open && (
         <div className={`project-div ${open}`}>*/}
      <StyledP>{project.summary}</StyledP>
      <StyledRow>
        <a href={project.siteLink}>View Project</a>
        {project.sourceLink && <a href={project.sourceLink}>View Source</a>}
      </StyledRow>
      {/*</div>
      )}*/}
    </section>
  )
}

export default Project
