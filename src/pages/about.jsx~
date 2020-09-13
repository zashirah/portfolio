import React from 'react'

import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/Skills"
import AboutComponent from "../components/AboutComponent"

import {AboutMeText} from "../content/about"

const AboutPage = styled.div`
  margin: 100px auto 100px auto;
  /* height: 80vh; */
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
`

const SkillsContainer = styled.div`
  width: 20%;
`

const SpacingContainer = styled.div`
  width: 5%;
`

const AboutContainer = styled.div`
  width: 75%;
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
          <Skills />
        </SkillsContainer>
      </AboutPage>
    </Layout>
  )
}

export default About
