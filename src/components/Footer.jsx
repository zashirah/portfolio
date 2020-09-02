import React from "react"

import styled from "styled-components"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
 
import ResumeLink from "./ResumeLink"

const StyledFooter = styled.footer`
  /* position: fixed; */
  /* bottom: 0; */
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  padding-bottom: 15px;
`

const LeftFooter = styled.div`
  padding-left: 50px;
`

const RightFooter = styled.div`
  padding-right: 150px;
  width: 100px;
  display: flex;

`

const SocialContainer = styled(motion.div)`
  padding-left: 50px;
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
