import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components"

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: #615192
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeContainer />
  </Layout>
)

export default IndexPage
