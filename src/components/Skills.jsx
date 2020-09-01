import React from 'react'

import Icon from "./Icon"

import styled from "styled-components"

import iconPathArray from "../assets/icons"

const SkillsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SkillsTitle = styled.h1`
  font-size: 72px;
`

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Skills = () => {

  const IconsJSX = iconPathArray.map(iconPath => 
    <Icon iconPath={iconPath}/>
  )

  return (
    <SkillsDiv>
      <SkillsTitle>Skills</SkillsTitle>
      <IconContainer>{IconsJSX}</IconContainer>
    </SkillsDiv>
  )
}

export default Skills
