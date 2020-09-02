import React from "react"
// import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Headshot from "../components/Headshot"
import ProfessionalSummary from "../components/ProfessionalSummary"

import styled from "styled-components"

const HomeContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
`

const SummaryHeadshotContainer = styled.div`
  padding-top: calc(50px + 10vh);
  display: flex;
  flex-direction: row;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeContainer>
      <SummaryHeadshotContainer>
        <Headshot />
        <ProfessionalSummary />
      </SummaryHeadshotContainer>
    </HomeContainer>
  </Layout>
)

export default IndexPage
