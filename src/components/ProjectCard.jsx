import React, { useState } from "react"

import { Link } from "gatsby"

import styled, { css } from "styled-components"
import { motion } from "framer-motion"

import iconPathArray from "../assets/icons2"
import Icon from "./Icon"

const CardContainer = styled(motion.div)`
  height: 60vh;
  width: 80vw;
  padding: 15px;
  margin: 75px;
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
  object-fit: cover;
  ${props =>
    props.primary &&
    css`
      opacity: 75%;
    `}
`

const ButtonLink = styled(motion.button)`
  position: absolute;
  font-size: 18px;
  background-color: var(--red);
  width: 150px;
  left: calc(50% - 75px);
  border-radius: 15px;
  border: none;
  padding: 2px;
  box-shadow: 0px 1px 5px 1px var(--olive);
`

const ButtonLinkToSite = styled(ButtonLink)`
  top: 35%;
`

const ButtonLinkToGit = styled(ButtonLink)`
  top: 65%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const ProjectCard = ({ title, image, skills, description, link, githubLink }) => {
  // console.log(skills)
  const [hovered, setHovered] = useState(false)

  const IconsJSX = skills.map(skill => {
    console.log(skill)
    let icon = iconPathArray.find(iconPath => iconPath.name === skill)
    console.log(icon.jsx)
    return <Icon iconPath={icon.jsx} />
  })

  return (
    <CardContainer
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      primary={hovered && "primary"}
    >
      <CardLeft>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          dolorem laboriosam impedit, doloremque sunt facilis, dolor ullam
          itaque nam corrupti porro, possimus sequi excepturi sint eligendi
          dolorum cupiditate quia accusamus?
        </CardDescription>
        <CardSkills>{IconsJSX}</CardSkills>
      </CardLeft>
      <CardRight>
        <CardImage src={image} primary={hovered && "primary"}></CardImage>
        {hovered && (
          <StyledLink to={link}>
            <ButtonLinkToSite whileHover={{ scale: 1.1 }}>
              Check out the site!
            </ButtonLinkToSite>
          </StyledLink>
        )}
        {hovered && (
          <StyledLink to={githubLink}>
            <ButtonLinkToGit whileHover={{ scale: 1.1 }}>
              Check out the GitHub Repo!
            </ButtonLinkToGit>
          </StyledLink>
        )}
      </CardRight>
    </CardContainer>
  )
}

export default ProjectCard
