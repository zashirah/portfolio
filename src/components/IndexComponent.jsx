import React from 'react'

import Headshot from "../components/Headshot"
import ProfessionalSummary from "../components/ProfessionalSummary"

import styled from "styled-components"

const SummaryHeadshotContainer = styled.div`
  padding-top: calc(50px + 10vh);
  display: flex;
  flex-direction: row;
`

const IndexComponent = () => {
  return (
    <SummaryHeadshotContainer>
      <Headshot />
      <ProfessionalSummary />
    </SummaryHeadshotContainer>
  )
}

export default IndexComponent
