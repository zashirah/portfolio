import React from "react"

import styled from "styled-components"

import '../styles.css'

const ProfessionalSummaryContainer = styled.div`
  height: 400px;
  width: 400px;
  margin: 0 auto;
  padding: 100px;
  font-size: 24px;
  line-height: 150%;
  color: var(--olive);
  background-color: var(--silver);
  border-radius: 100%;
  z-index: 0;
  /* &:before {
    content: "";
    height: 200px;
    width: 200px;
    margin-bottom: 35px;
    padding-bottom: 50px;
    float: left;
    shape-outside: circle(40%);
  } */
`

const ProfessionalSummaryContent = styled.p`
  text-align: center;
  margin: 10px;
`

const ProfessionalSummary = ({ children }) => {
  return (
    <ProfessionalSummaryContainer>
      <ProfessionalSummaryContent>{children}</ProfessionalSummaryContent>
    </ProfessionalSummaryContainer>
  )
}

export default ProfessionalSummary
