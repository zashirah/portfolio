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
  @media (max-width: 1110px) {
    height: 350px;
    width: 350px;
    font-size: 20px;
    padding: 85px;
  }
  @media (max-width: 750px) {
    display: none;
  }
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
