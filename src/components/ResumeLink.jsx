import React from 'react'

import { Link } from "gatsby"
 
import styled from "styled-components"
import { motion } from "framer-motion"
 
const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledButton = styled(motion.button)`
  background-color: var(--silver);
  height: 50px;
  /* width: 200px; */
  color: var(--olive);
  font-size: 24px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: none;
  box-shadow: 0px 1px 2.5px 0.5px var(--olive);
  padding: 0px 5px;
  @media (max-width: 767px) {
    height: 30px;
    font-size: 12px;
  }
`

const ResumeLink = () => {
  return (
    <StyledLink
      to="https://drive.google.com/file/d/1R6Ht80psjSEERuyNFg6cP72J_N6o1G_k/view"
      target="_blank"
      onClick={event => {
        event.preventDefault()
        window.open(this.makeHref("route"))
      }}
    >
      <StyledButton whileHover={{ scale: 1.1 }} type="submit">
        Download my resume
      </StyledButton>
    </StyledLink>
  )
}

export default ResumeLink
