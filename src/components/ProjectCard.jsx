import React from "react"

import styled from "styled-components"

import iconPathArray from "../assets/icons2"
import Icon from "./Icon"

const CardContainer = styled.div`
  height: 400px;
  width: 500px;
  display: flex;
  flex-direction: row;
  background-color: var(--silver);
  border: solid var(--silver) 5px;
  border-radius: 15px;
  box-shadow: 0px 5px 10px 1px var(--olive);
`

const CardLeft = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CardTitle = styled.h1`
  text-align: center;
`

const CardDescription = styled.p`
  padding: 0px 5px;
`

const CardSkills = styled.div`
  padding: 0px 0px;
  display: flex;
  justify-content: space-evenly;
`

const CardImage = styled.img`
  width: 200px;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
`

const ProjectCard = ({ title, image, skills, description }) => {
  // console.log(skills)
  const IconsJSX = skills.map(skill => {
    console.log(skill)
    let icon = iconPathArray.find(iconPath => iconPath.name === skill)
    console.log(icon.jsx)
    return <Icon iconPath={icon.jsx} />
  })

  return (
    <CardContainer>
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
      <CardImage src={image}></CardImage>
    </CardContainer>
  )
}

export default ProjectCard
