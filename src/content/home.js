import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const ProfessionalSummaryText = () => (
  <>
    I’m a data analyst and consultant turned <i>SOFTWARE ENGINEER</i> that loves
    to keep up with modern technology and design powerful tools. I’m looking to
    join a collaborative engineering team that challenges itself to grow and
    stay up to date in engineering tactics and technologies.
  </>
)

const StyledLink = styled(Link)`
  color: var(--olive);
  text-decoration: none;
  text-transform: uppercase;
  /* font-size: 24px; */
  &&:hover {
    text-decoration: underline;
  }
`

const Title = styled.h2`
  color: var(--white);
  @media (max-width: 767px) {
    font-size: 12px;
  }
`

const Links = styled.h3`
  color: var(--olive);
  @media (max-width: 767px) {
    font-size: 12px;
  }
`

export const HomeLinksText = [
  {
    top: (
      <>
        <Title>Zach Shirah</Title>
      </>
    ),
    bottom: (
      <>
        <Title>Softare Engineer</Title>
      </>
    ),
  },
  {
    about: (
      <>
        <Links>
          Learn more <StyledLink to="/about">about me</StyledLink>
        </Links>
      </>
    ),
    projects: (
      <>
        <Links>
          Check out <StyledLink to="/projects">my projects</StyledLink>
        </Links>
      </>
    ),
    contact: (
      <>
        <Links>
          Learn how to <StyledLink to="/contact">reach out</StyledLink>
        </Links>
      </>
    ),
  },
]
