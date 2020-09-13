import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import "../styles.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headshot from "../components/Headshot"
import ProfessionalSummary from "../components/ProfessionalSummary"

import { ProfessionalSummaryText } from "../content/home";


const SummaryHeadshotContainer = styled.div`
  padding-top: calc(50px + 10vh);
  display: flex;
  flex-direction: row;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <SummaryHeadshotContainer>
        <Headshot />
        <ProfessionalSummary>
          <ProfessionalSummaryText />
        </ProfessionalSummary>
      </SummaryHeadshotContainer>
    </Layout>
  )
}

export default IndexPage
