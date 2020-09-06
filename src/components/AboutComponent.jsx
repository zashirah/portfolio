import React from 'react'

import { Link } from "gatsby"

import styled from "styled-components"

import CTAButton from "./CTAButton"
import ResumeLink from "./ResumeLink"

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AboutHeader = styled.h1`
  font-size: 48px;
  margin-bottom: 15px;
`

const AboutParagraph = styled.p`
  font-size: 18px;
  text-align: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const AboutComponent = ({ info }) => {
  return (
    <AboutDiv>
      <AboutHeader>{info.title}</AboutHeader>
      <AboutParagraph>{info.paragraph}</AboutParagraph>
      <AboutParagraph>{info.cta1}</AboutParagraph>
      <StyledLink to="/contact">
        <CTAButton text={info.cta1ButtonText} />
      </StyledLink>
      <AboutParagraph>{info.cta2}</AboutParagraph>
      <StyledLink to="/projects">
        <CTAButton text={info.cta2ButtonText} primary={"primary"} />
      </StyledLink>
      {/* <ResumeLink /> */}
    </AboutDiv>
  )
}

export default AboutComponent
