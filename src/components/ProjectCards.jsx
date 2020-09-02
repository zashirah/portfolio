import React from 'react'

import styled from 'styled-components'

import ProjectCard from "./ProjectCard"

import image from "../images/gatsby-astronaut.png"

const ProjectCardsContainer = styled.div`
  padding: 100px;
  /* min-height: 1000px; */
  height: 85vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

const projectCardsInfo = [
  {
    title: "CityScore",
    image: image,
    skills: ["javascript", "html", "css"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum similique, impedit mollitia quaerat eos sit deleniti perferendis ipsa in quibusdam. Rem adipisci eligendi officiis asperiores dolore porro. Quasi, nobis?",
  },
  {
    title: "2048 (clone)",
    image: image,
    skills: ["reactjs", "css"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum similique, impedit mollitia quaerat eos sit deleniti perferendis ipsa in quibusdam. Rem adipisci eligendi officiis asperiores dolore porro. Quasi, nobis?",
  },
  {
    title: "BARC Shelter",
    image: image,
    skills: ["reactjs", "mongodb", "css"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum similique, impedit mollitia quaerat eos sit deleniti perferendis ipsa in quibusdam. Rem adipisci eligendi officiis asperiores dolore porro. Quasi, nobis?",
  },
]

const ProjectCardsJSX = projectCardsInfo.map(projectCard => (
  <ProjectCard
    title={projectCard.title}
    image={projectCard.image}
    skills={projectCard.skills}
    description={projectCard.description}
  />
))

const ProjectCards = () => {
  return <ProjectCardsContainer>{ProjectCardsJSX}</ProjectCardsContainer>
}

export default ProjectCards
