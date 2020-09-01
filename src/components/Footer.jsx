import React from 'react'

import styled from "styled-components"

import ResumeLink from "./ResumeLink"

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
`

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      <ResumeLink />
    </StyledFooter>
  )
}

export default Footer
