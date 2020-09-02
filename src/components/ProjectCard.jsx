import React from 'react'

import styled from 'styled-components'

import image from "../images/gatsby-astronaut.png"

const CardContainer = styled.div`
  height: 300px;
  width: 500px;
  display: flex;
  flex-direction: row;
  background-color: var(--silver);
  margin: 25px;
  border: solid var(--silver) 5px;
  border-radius: 15px;
`

const CardLeft = styled.div`
  width: 300px;
  height: 400px;
`

const CardDescription = styled.p`
  padding: 0px 5px;
`

const CardLanguages = styled.div`
  padding: 0px 5px;
`

const CardImage = styled.img`
  width: 200px;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
`

const ProjectCard = () => {
  return (
    <CardContainer>
      <CardLeft>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          dolorem laboriosam impedit, doloremque sunt facilis, dolor ullam
          itaque nam corrupti porro, possimus sequi excepturi sint eligendi
          dolorum cupiditate quia accusamus?
        </CardDescription>
        <CardLanguages></CardLanguages>
      </CardLeft>
      <CardImage src={image}></CardImage>
    </CardContainer>
  )
}

export default ProjectCard
