import React from "react"

import Icon from "./Icon"

import styled from "styled-components"

import iconPathArray from "../assets/icons2"

const SkillsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: row;
    padding-top: 25px;
  }
`

const SkillsTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 15px;
  @media (max-width: 1200px) {
    font-size: 36px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Skills = ({ skills }) => {
  const IconsJSX = skills.map(skill => {
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
