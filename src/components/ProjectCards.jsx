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
    link: "https://pages.git.generalassemb.ly/zshirah/CityScore/",
    githubLink: "https://git.generalassemb.ly/zshirah/CityScore",
  },
  {
    title: "2048 (clone)",
    image: image,
    skills: ["reactjs", "css"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum similique, impedit mollitia quaerat eos sit deleniti perferendis ipsa in quibusdam. Rem adipisci eligendi officiis asperiores dolore porro. Quasi, nobis?",
    link: "https://2048-clone-zs.netlify.app/",
    githubLink: "https://github.com/zashirah/2048-clone",
  },
  {
    title: "BARC Shelter",
    image: image,
    skills: ["reactjs", "mongodb", "css"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum similique, impedit mollitia quaerat eos sit deleniti perferendis ipsa in quibusdam. Rem adipisci eligendi officiis asperiores dolore porro. Quasi, nobis?",
    link: "https://barc-shelter.netlify.app/",
    githubLink: "https://github.com/zashirah/Barc-Shelter",
  },
]

const ProjectCardsJSX = projectCardsInfo.map(projectCard => (
  <ProjectCard
    title={projectCard.title}
    image={projectCard.image}
    skills={projectCard.skills}
    description={projectCard.description}
    link={projectCard.link}
    githubLink={projectCard.githubLink}
  />
))

const ProjectCards = () => {
  return <ProjectCardsContainer>{ProjectCardsJSX}</ProjectCardsContainer>
}

export default ProjectCards
