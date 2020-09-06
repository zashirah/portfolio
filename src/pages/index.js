import React from "react"
// import { Link } from "gatsby"
import "../styles.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexComponent from "../components/IndexComponent"
// import Headshot from "../components/Headshot"
// import ProfessionalSummary from "../components/ProfessionalSummary"

// import styled from "styled-components"

// const SummaryHeadshotContainer = styled.div`
//   padding-top: calc(50px + 10vh);
//   display: flex;
//   flex-direction: row;
// `

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
        <IndexComponent />
        {/* <SummaryHeadshotContainer>
          <Headshot />
          <ProfessionalSummary />
        </SummaryHeadshotContainer> */}
    </Layout>
  )
}

export default IndexPage
