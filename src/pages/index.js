import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
// import { Link } from "gatsby"

import "../styles.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headshot from "../components/Headshot"
import ProfessionalSummary from "../components/ProfessionalSummary"

import { ProfessionalSummaryText, HomeLinksText } from "../content/home";


// const SummaryHeadshotContainer = styled.div`
//   padding-top: calc(50px + 10vh);
//   display: flex;
//   flex-direction: row;
// `

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

const Left = styled.div`
  box-sizing: border-box;
  width: 40vw;
  background-color: var(--olive);
  height: 100vh;
  padding-right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`


const Right = styled.div`
  box-sizing: border-box;
  width: 60vw;
  margin-left: 25px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const IndexPage = ({ siteTitle }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <HomeContainer>

      <Left>
        {HomeLinksText[0].top}
        {HomeLinksText[0].bottom}
      </Left>
      <Right>
        {HomeLinksText[1].about}
        {HomeLinksText[1].projects}
        {HomeLinksText[1].contact}
      </Right>
      </HomeContainer>
      {/* <SummaryHeadshotContainer>
        <Headshot />
        <ProfessionalSummary>
          <ProfessionalSummaryText />
        </ProfessionalSummary>
      </SummaryHeadshotContainer> */}
    </Layout>
  )
}

IndexPage.propTypes = {
  siteTitle: PropTypes.string,
}

IndexPage.defaultProps = {
  siteTitle: ``,
}

export default IndexPage
