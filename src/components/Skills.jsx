import React from "react"

import Icon from "./Icon"

import styled from "styled-components"

import iconPathArray from "../assets/icons2"

const SkillsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SkillsTitle = styled.h1`
  font-size: 64px;
  margin-bottom: 15px;
`

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Skills = () => {
  const skillsArray = [
    "css",
    "html",
    "nodejs",
    "reactjs",
    "mongodb",
    "python",
    "r",
    "sas",
    "tableau",
    "salesforce",
    "jupyter",
    "gatsbyjs"
  ]

  console.log(iconPathArray)

  const IconsJSX = skillsArray.map(skill => {
    let icon = iconPathArray.find(iconPath => iconPath.name === skill)
    console.log(icon.jsx)
    return <Icon iconPath={icon.jsx} />
  })

  return (
    <SkillsDiv>
      <SkillsTitle>Skills</SkillsTitle>
      <IconContainer>{IconsJSX}</IconContainer>
    </SkillsDiv>
  )
}

export default Skills
