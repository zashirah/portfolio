import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"

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

const Title = styled(motion.h2)`
  color: var(--white);
  @media (max-width: 767px) {
    font-size: 12px;
  }
`

const Links = styled(motion.h3)`
  color: var(--olive);
  @media (max-width: 767px) {
    font-size: 12px;
  }
`

export const HomeLinksText = [
  {
    top: (
      <>
        <Title
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -1000 }}
          transition={{ duration: 0.5 }}
        >
          Zach Shirah
        </Title>
      </>
    ),
    bottom: (
      <>
        <Title
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -1000 }}
          transition={{ duration: 0.5 }}
        >
          Softare Engineer
        </Title>
      </>
    ),
  },
  {
    about: (
      <>
        <Links
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 1000 }}
          transition={{ duration: 0.5 }}
        >
          Learn more <StyledLink to="/about">about me</StyledLink>
        </Links>
      </>
    ),
    projects: (
      <>
        <Links
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 1000 }}
          transition={{ duration: 0.5 }}
        >
          Check out <StyledLink to="/projects">my projects</StyledLink>
        </Links>
      </>
    ),
    contact: (
      <>
        <Links
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 1000 }}
          transition={{ duration: 0.5 }}
        >
          Learn how to <StyledLink to="/contact">reach out</StyledLink>
        </Links>
      </>
    ),
  },
]
