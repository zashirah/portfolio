import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Nav = styled.div`
  // background: transparent;
  max-width: 1080px;
`

const NavHeader = styled.header`
  max-width: 1080px;
  width: 100%;
  padding: 25px 0px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

const NavLeft = styled.div`
  width: 50%;
  text-align: left;
`

const NavCenter = styled.div`
  width: 17%;
`

const NavRight = styled.div`
  width: 33%;
  // text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const NavTitle = styled.h1`
  // margin: 0;
`
const TitleLink = styled(Link)`
  color: var(--olive);
  text-decoration: none;
`

const StyledLink = styled(Link)`
  color: var(--olive);
  text-decoration: none;
  font-size: 24px;
`

const Header = ({ siteTitle }) => (
  <Nav>
    <NavHeader>
      <NavLeft>
        <NavTitle>
          <TitleLink to="/">{siteTitle}</TitleLink>
        </NavTitle>
      </NavLeft>
      <NavCenter>
      </NavCenter>
      <NavRight>
        <StyledLink to="/about">About Me</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </NavRight>
    </NavHeader>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
