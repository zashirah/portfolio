import React from 'react'

import styled from "styled-components"
import { SocialIcon } from 'react-social-icons'

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
      <SocialIcon url="http://linkedin.com/in/zachshirah/" />
      <SocialIcon url="https://github.com/zashirah" />
    </StyledFooter>
  )
}

export default Footer
