import React from "react"

import styled from "styled-components"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
 
import ResumeLink from "./ResumeLink"

const StyledFooter = styled.footer`
  /* position: fixed;
  bottom: 0; */

  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  margin-top: 25px;
  padding-bottom: 15px;
  @media (min-width: 769px) {
    position: fixed;
    bottom: 0;
    margin-top: 0px;
    padding-bottom: 5px;
  }
`

const LeftFooter = styled.div`
  padding-left: 50px;
  @media (max-width: 750px) {
    padding-left: 10px;
  }
`

const RightFooter = styled.div`
  padding-right: 150px;
  width: 100px;
  display: flex;
  @media (max-width: 750px) {
    padding-right: 10px;
    width: 60%;
    justify-content: flex-end;
  }
`

const SocialContainer = styled(motion.div)`
  padding-left: 50px;
  @media (max-width: 750px) {
    padding-left: 10px;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <LeftFooter>
        <ResumeLink />
      </LeftFooter>
      <RightFooter>
        <SocialContainer whileHover={{ scale: 1.1 }}>
          <SocialIcon url="http://linkedin.com/in/zachshirah/" />
        </SocialContainer>
        <SocialContainer whileHover={{ scale: 1.1 }}>
          <SocialIcon url="https://github.com/zashirah" />
        </SocialContainer>
      </RightFooter>
    </StyledFooter>
  )
}

export default Footer
