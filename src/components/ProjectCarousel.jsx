import React, { useState } from "react"
import styled from "styled-components"
import {
  ArrowheadRightOutline,
  ArrowheadLeftOutline,
} from "@styled-icons/evaicons-outline"
import { wrap } from "@popmotion/popcorn"
import ProjectCard from "./ProjectCard"
import { ProjectInfo } from "../content/projects"

const CarouselContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  @media (max-width: 767px) {
    padding-left: 0;
    padding-right: 0;
  }
`

const ArrowButton = styled.button`
  border: none;
  outline: none;
  background-color: var(--white);
  /* &&:click {
  } */
` 


const RightArrow = styled(ArrowheadRightOutline)`
  box-sizing: border-box;
  height: 75px;
  width: 75px;
  color: var(--olive);
  &&:hover {
    height: 85px;
    width: 85px;
  }
  @media (max-width: 767px) {
    height: 25px;
    width: 25px;
    &&:hover {
      height: 25px;
      width: 25px;
    }
  }
`

const LeftArrow = styled(ArrowheadLeftOutline)`
  box-sizing: border-box;
  height: 75px;
  width: 75px;
  color: var(--olive);
  &&:hover {
    height: 85px;
    width: 85px;
  }
  @media (max-width: 767px) {
    height: 25px;
    width: 25px;
    &&:hover {
      height: 25px;
      width: 25px;
    }
  }
`

const ProjectCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = direction => {
    setPage([page + direction, direction])
  }

  const index = wrap(0, ProjectInfo.length, page)

  return (
    <CarouselContainer>
      <ArrowButton onClick={() => paginate(-1)}>
        <LeftArrow />
      </ArrowButton>
      <ProjectCard ProjectCardInfo={ProjectInfo[index]}></ProjectCard>
      <ArrowButton onClick={() => paginate(1)}>
        <RightArrow />
      </ArrowButton>
    </CarouselContainer>
  )
}

export default ProjectCarousel
