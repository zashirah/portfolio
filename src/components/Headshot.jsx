import React from 'react'

import styled from 'styled-components'

import headshotImage from "../images/headshot.png"

const HeadshotContainer = styled.div`
  /* position: fixed; */
  border-radius: 100%;
  margin: 0;
  padding: 0;
  z-index: 1;
  background-color: var(--siver);
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
`

const Headshot = () => {
  return (
    <HeadshotContainer>
      <HeadshotImage src={headshotImage} alt="Zach Shirah Headshot" />
    </HeadshotContainer>
  )
}

export default Headshot
