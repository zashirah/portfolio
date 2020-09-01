import React from 'react'

import { Link } from "gatsby"
 
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledButton = styled.button`
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
`

const ResumeLink = () => {
  return (
    <StyledLink
      to="https://docdro.id/pdd3eAR"
      target="_blank"
      onClick={event => {
        event.preventDefault()
        window.open(this.makeHref("route"))
      }}
    >
      <StyledButton type="submit">Download my resume</StyledButton>
    </StyledLink>
  )
}

export default ResumeLink
