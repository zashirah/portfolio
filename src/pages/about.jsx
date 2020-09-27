import React from 'react'

import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/Skills"
import AboutComponent from "../components/AboutComponent"

import { AboutMeText, SkillsArray } from "../content/about"

const AboutPage = styled.div`
  box-sizing: border-box;
  /* margin: 100px auto 100px auto; */
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 1440px;
  padding-left: 100px;
  padding-right: 100px;
  @media (max-width: 767px) {
    flex-direction: column;
    height: 100%;
    /* margin-top: 70px; */
  }
`

const SkillsContainer = styled.div`
  width: 20%;
  min-width: 200px;
  @media (max-width: 767px) {
    width: 90vw;
  }
`

const SpacingContainer = styled.div`
  width: 5%;
`

const AboutContainer = styled.div`
  width: 75%;
  @media (max-width: 767px) {
    width: 90vw;
  }
`

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <AboutPage>
        <AboutContainer>
          <AboutComponent info={AboutMeText}/>
        </AboutContainer>
        <SpacingContainer />
        <SkillsContainer>
          <Skills skills={SkillsArray} />
        </SkillsContainer>
      </AboutPage>
    </Layout>
  )
}

export default About
