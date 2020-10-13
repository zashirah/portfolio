import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import HamburgerMenu from "./HamburgerMenu"

const Nav = styled.div`
  /* background-color: var(--white); */
  max-width: 1440px;
  @media screen and (max-width: 767px) {
    height: ${props => (props.navOpen ? "100vh" : "12vh")};
    /* height: 12vh; */
  }
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
  @media screen and (max-width: 767px) {
    height: ${props => (props.navOpen ? "100vh" : "12vh")};
    align-items: ${props => (props.navOpen ? "flex-start" : "center")};
    top: ${props => (props.navOpen ? "100" : "0")};
    padding-top: ${props => (props.navOpen ? "12px" : "0")};
    /* align-items: flex-start; */
  }
`

const NavLeft = styled.div`
  width: 55%;
  text-align: left;
  padding-left: 25px;
  @media screen and (max-width: 767px) {
    width: ${props => (props.navOpen ? "70%" : "90%")};
  }
`

const NavCenter = styled.div`
  width: 8%;
  @media screen and (max-width: 767px) {
    width: 0%;
  }
`

const NavRight = styled.div`
  width: 37%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 25px;
  @media (max-width: 767px) {
    /* justify-content: flex-end; */
    align-items: flex-end;
    flex-direction: column;
    width: ${props => (props.navOpen ? "30%" : "10%")};
    padding-top: ${props => (props.navOpen ? "16px" : "0")};
  }
`

const NavTitle = styled.h1`
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
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
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`

const NavListItem = styled.li`
  box-sizing: border-box;
  list-style: none;
  color: var(--olive);
  @media screen and (max-width: 767px) {
    display: ${props => (props.navOpen ? "flex" : "none")};
    padding: ${props => (props.navOpen ? "10px 0 10px 0" : "10px")};
    align-items: ${props => (props.navOpen ? "flex-end" : "center")};
    /* font-size: 25px; */
  }
  /* @media screen and (max-width: 425px) {
    padding: 10px 0 10px 0;
  } */
`

const Header = ({ siteTitle }) => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Nav navOpen={navOpen}>
      <NavHeader navOpen={navOpen}>
        <NavLeft navOpen={navOpen}>
          <NavTitle>
            <TitleLink
              navOpen={navOpen}
              to="/"
              onClick={() => setNavOpen(false)}
            >
              {siteTitle}
            </TitleLink>
          </NavTitle>
        </NavLeft>
        <NavCenter></NavCenter>
        <NavRight navOpen={navOpen}>
          <HamburgerMenu setNavOpen={setNavOpen} navOpen={navOpen} />
          <StyledLink to="/about" onClick={() => setNavOpen(false)}>
            <NavListItem navOpen={navOpen}>About Me</NavListItem>
          </StyledLink>
          <StyledLink to="/projects" onClick={() => setNavOpen(false)}>
            <NavListItem navOpen={navOpen}>Projects</NavListItem>
          </StyledLink>
          <StyledLink to="/contact" onClick={() => setNavOpen(false)}>
            <NavListItem navOpen={navOpen}>Contact</NavListItem>
          </StyledLink>
          <StyledLink to="/blog" onClick={() => setNavOpen(false)}>
            <NavListItem navOpen={navOpen}>Blog</NavListItem>
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
