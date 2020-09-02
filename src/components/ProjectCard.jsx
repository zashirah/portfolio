import React from 'react'

import styled from 'styled-components'

import image from "../images/gatsby-astronaut.png"

const CardContainer = styled.div`
  height: 150px;
  width: 250px;
  display: flex;
  flex-direction: row;
`

const CardDescription = styled.div`
  width: 175px;
  height: 150px;
`

const CardImage = styled.img`
  width: 75px;
  height: 150px;
`

const ProjectCard = () => {
  return (
    <CardContainer>
      <CardDescription>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        dolorem laboriosam impedit, doloremque sunt facilis, dolor ullam itaque
        nam corrupti porro, possimus sequi excepturi sint eligendi dolorum
        cupiditate quia accusamus?
      </CardDescription>
      <CardImage src={image}></CardImage>
    </CardContainer>
  )
}

export default ProjectCard
