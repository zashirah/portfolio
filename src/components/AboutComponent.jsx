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
  font-size: 64px;
  margin-bottom: 15px;
`

const AboutParagraph = styled.p`
  font-size: 24px;
  text-align: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const AboutComponent = () => {
  return (
    <AboutDiv>
      <AboutHeader>About</AboutHeader>
      <AboutParagraph>
        I am a Software Engineer with a wide variety of technology experience
        from data analytics and data science to sales operations consulting.
        Throughout my career, I have always found the most satisfaction when I
        was building something with code, so I left my consulting job behind and
        to take on Software Engineering. Due to the nature of my background, I
        know the level of involvement needed for a successful software project.
        I'm excited to join a Software Engineering team that constantly
        challenges itself to build the best tool possible.
      </AboutParagraph>
      <AboutParagraph>
        Would love the opportunity to work with you.
      </AboutParagraph>
      <StyledLink to="/contact">
        <CTAButton text={"Contact Me"} primary={false} />
      </StyledLink>
      <AboutParagraph>Not sure yet?</AboutParagraph>
      <StyledLink to="/projects">
        <CTAButton text={"Check out my Projects"} primary={"primary"} />
      </StyledLink>
      {/* <ResumeLink /> */}
    </AboutDiv>
  )
}

export default AboutComponent
