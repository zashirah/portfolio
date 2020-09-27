import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Nav = styled.div`
  /* background-color: var(--white); */
  max-width: 1440px;
`

const NavHeader = styled.header`
  background-color: var(--white);
  max-width: 1440px;
  width: 100%;
  /* height: 10vh; */
  /* padding: 10px 0px; */
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  z-index: 5;
  box-shadow: 0px 1px 5px 1px var(--olive);
`

const NavLeft = styled.div`
  width: 55%;
  text-align: left;
  padding-left: 25px;
`

const NavCenter = styled.div`
  width: 8%;
`

const NavRight = styled.div`
  width: 37%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 25px;
`

const NavTitle = styled.h1`
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`
const TitleLink = styled(Link)`
  color: var(--olive);
  text-decoration: none;
  &&:hover {
    text-decoration: underline;
  }
`

const StyledLink = styled(Link)`
  color: var(--olive);
  text-decoration: none;
  font-size: 24px;
  &&:hover {
    text-decoration: underline;
  }
  @media (max-width: 1000px) {
    font-size: 18px;
  }
`

const Header = ({ siteTitle }) => {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <NavTitle>
            <TitleLink to="/">{siteTitle}</TitleLink>
          </NavTitle>
        </NavLeft>
        <NavCenter></NavCenter>
        <NavRight>
          <StyledLink
            to="/about"
          >
            About Me
          </StyledLink>
          <StyledLink
            to="/projects"
          >
            Projects
          </StyledLink>
          <StyledLink
            to="/contact"
          >
            Contact
          </StyledLink>
        </NavRight>
      </NavHeader>
    </Nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
