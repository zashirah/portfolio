import React from 'react'

import styled from 'styled-components'

import Layout from "../components/layout"
import ProjectCard from "../components/ProjectCard"

import { ProjectInfo } from "../content/projects"

const ProjectCardsContainer = styled.div`
  padding-top: 150px;
  /* min-height: 1000px; */
  /* height: 85vh; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

const ProjectCardsJSX = ProjectInfo.map(projectCard => (
  <ProjectCard
    key={projectCard.title}
    title={projectCard.title}
    image={projectCard.image}
    skills={projectCard.skills}
    description={projectCard.description}
    link={projectCard.link}
    githubLink={projectCard.githubLink}
  />
))

const projects = () => {
  return (
    <Layout>
      <ProjectCardsContainer>{ProjectCardsJSX}</ProjectCardsContainer>
    </Layout>
  )
}

export default projects
