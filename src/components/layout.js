/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import Footer from "./Footer"

import Header from "./header"
// import "./layout.css"
import "../styles.css"

const Background = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
const Site = styled.div`
  /* min-height: 100vh; */
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Site>
      <Background>
        <Header siteTitle={data.site.siteMetadata.title} />
      </Background>
      <Background>
        <main>{children}</main>
      </Background>
      <Background>
        <Footer />
      </Background>
    </Site>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
