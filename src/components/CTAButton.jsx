import React from 'react'

import styled, { css } from "styled-components"
import { motion } from "framer-motion"

const Button = styled(motion.button)`
  background-color: var(--red);
  height: 50px;
  /* width: 200px; */
  color: var(--white);
  font-size: 18px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0px 2px 5px 1px var(--olive);
  padding: 0px 5px;
  border: none;
  ${props =>
    props.primary &&
    css`
      background-color: var(--silver);
      color: var(--olive);
    `}
`

const CTAButton = ({ text, primary }) => {
  return (
  <Button
    whileHover={{ scale: 1.1 }}
    primary={primary}>{text}
  </Button>
)}

export default CTAButton
