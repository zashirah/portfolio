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
  max-width: 1080px;
  margin: 0 auto;
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
    <div>
      <Background>
        <Header siteTitle={data.site.siteMetadata.title} />
      </Background>
      <Background>
        <main>{children}</main>
      </Background>
      <Background>
        <Footer />
        {/* <footer style={{ position: "fixed", bottom: 0 }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <ResumeLink />
        </footer> */}
      </Background>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
