import React from "react"

import styled from "styled-components"

import '../styles.css'

const ProfessionalSummaryContainer = styled.div`
  // position: fixed;
  height: 600px;
  width: 600px;
  margin: 0 auto;
  padding: 100px;
  font-size: 32px;
  // font-size: calc(24px + 1vw);
  line-height: 150%;
  color: var(--olive);
  background-color: var(--silver);
  border-radius: 100%;
  z-index: 0;
  &:before {
    content: "";
    height: 200px;
    width: 200px;
    /* margin-right: 50px; */
    margin-bottom: 35px;
    padding-bottom: 50px;
    float: left;
    shape-outside: circle(40%);
  }
`

const ProfessionalSummaryContent = styled.p`
  text-align: center;
  margin: 35px;
`

const ProfessionalSummary = () => {
  return (
    <ProfessionalSummaryContainer>
      <ProfessionalSummaryContent>
        I’m a data analyst and consultant turned <i>SOFTWARE ENGINEER</i> that
        loves to keep up with modern technology and design powerful tools. I’m
        looking to join a collaborative engineering team that challenges itself
        to grow and stay up to date in engineering tactics and technologies.
      </ProfessionalSummaryContent>
    </ProfessionalSummaryContainer>
  )
}

export default ProfessionalSummary
