/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"

import styled from "styled-components"

import Footer from "./Footer"
import StickyFooter from "./StickyFooter"

import Header from "./header"
// import "./layout.css"
import "../styles.css"

const Background = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
const Site = styled(motion.div)`
  /* min-height: 100vh; */
`

const Layout = ({ children, sticky }) => {
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
    <Site
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Background>
        <Header siteTitle={data.site.siteMetadata.title} />
      </Background>
      <Background>
        <main>{children}</main>
      </Background>
      <Background>
        {!sticky && <Footer />}
        {sticky && <StickyFooter />}
      </Background>
    </Site>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
