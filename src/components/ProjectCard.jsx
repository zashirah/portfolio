import React, { useState } from "react"

import { Link } from "gatsby"

import styled, { css } from "styled-components"
import { motion } from "framer-motion"

import iconPathArray from "../assets/icons2"
import Icon from "./Icon"

const CardContainer = styled(motion.div)`
  height: 60vh;
  width: 70vw;
  padding: 15px;
  margin: 0px 15px;
  display: flex;
  flex-direction: row;
  background-color: var(--silver);
  /* border: solid var(--silver) 5px; */
  border-radius: 15px;
  box-shadow: 0px 5px 10px 1px var(--olive);
  ${props =>
    props.primary &&
    css`
      box-shadow: 0px 5px 15px 1px var(--olive);
    `}
`

const CardLeft = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
`

const CardTitle = styled.h1`
  text-align: center;
  margin-top: 0px;
  margin-bottom: 10px;
`

const CardDescription = styled.p`
  margin: 0px;
  padding: 0px 5px;
`

const Buttons = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: space-evenly;
  padding: 0px;
  margin: 0px;
`

const ButtonLink = styled(motion.button)`
  font-size: 18px;
  background-color: var(--red);
  width: 150px;
  height: 50px;
  /* left: calc(50% - 75px); */
  border-radius: 15px;
  border: none;
  padding: 2px;
  margin: 10px;
  box-shadow: 0px 1px 5px 1px var(--olive);
  /* @media (max-width: 1024px) {
    font-size: 14px;
    width: 100px;
  } */
`

const StyledLink = styled.a`
  text-decoration: none;
  padding: 0px;
  margin: 0px;
`

const CardSkills = styled.div`
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: space-evenly;
`

const CardRight = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  /* object-fit: fill; */
  object-fit: contain;
  /* ${props =>
    props.primary &&
    css`
      opacity: 75%;
    `} */
`

const ProjectCard = ({
  ProjectCardInfo,
  // title,
  // image,
  // skills,
  // description,
  // link,
  // githubLink,
}) => {
  const [hovered, setHovered] = useState(false)

  const {
    title,
    image,
    skills,
    description,
    link,
    githubLink
  } = ProjectCardInfo

  const IconsJSX = skills.map((skill, index) => {
    let icon = iconPathArray.find(iconPath => iconPath.name === skill)
    return <Icon bigger="bigger" iconPath={icon.jsx} key={index} />
  })

  return (
    <CardContainer
    // whileHover={{ scale: 1.1 }}
    // onHoverStart={() => setHovered(true)}
    // onHoverEnd={() => setHovered(false)}
    // primary={hovered && "primary"}
    >
      <CardLeft>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardSkills>{IconsJSX}</CardSkills>
        <Buttons>
          <StyledLink href={link}>
            <ButtonLink whileHover={{ scale: 1.1 }}>
              Go to the Site
            </ButtonLink>
          </StyledLink>
          <StyledLink href={githubLink}>
            <ButtonLink whileHover={{ scale: 1.1 }}>
              Go to the GitHub Repo
            </ButtonLink>
          </StyledLink>
          {/* <StyledLink href={githubLink}>
            <ButtonLink whileHover={{ scale: 1.1 }}>
              Check out a quick demo video
            </ButtonLink>
          </StyledLink> */}
        </Buttons>
      </CardLeft>
      <CardRight>
        <CardImage src={image} primary={hovered && "primary"}></CardImage>
      </CardRight>
    </CardContainer>
  )
}

export default ProjectCard
