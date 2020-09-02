import React from 'react'

import styled from 'styled-components'

import ProjectCard from "./ProjectCard"

const ProjectCardsContainer = styled.div`
  padding: 100px;
  height: 80vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const ProjectCards = () => {
  return (
    <ProjectCardsContainer>
      <ProjectCard />
    </ProjectCardsContainer>
  )
}

export default ProjectCards
