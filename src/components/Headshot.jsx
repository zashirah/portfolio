import React from "react"

import styled from "styled-components"

import headshotImage from "../images/headshot.png"

const HeadshotContainer = styled.div`
  /* position: fixed; */
  border-radius: 100%;
  margin: 0;
  padding: 0;
  z-index: 1;
  background-color: var(--siver);
  padding-left: 7%;
  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
    padding-top: 75px;
  }
  @media (max-width: 750px) {
    /* display: none; */
  }
`

const HeadshotImage = styled.img`
  border-radius: 100%;
  margin: 0;
  padding: 0;
  border: solid var(--silver) 15px;
  object-fit: cover;
  /* min-height: 350px; */
  background-color: var(--siver);
  /* width: 500px; */
  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 750px) {
    /* display: none; */
  }
`

const Headshot = () => {
  return (
    <HeadshotContainer>
      <HeadshotImage src={headshotImage} alt="Zach Shirah Headshot" />
    </HeadshotContainer>
  )
}

export default Headshot
