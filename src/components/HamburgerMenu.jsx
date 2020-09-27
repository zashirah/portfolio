// https://www.leveluptutorials.com/tutorials/animating-react-with-framer-motion - this was used during this lesson

import React from "react"
import styled from 'styled-components'

const Hamburger = styled.div`
  /* padding-bottom: 10px; */
  text-align: right;
  @media screen and (min-width: 769px) {
    display: none;
  }
`

const HamburgerMenu = ({ setNavOpen, navOpen }) => (
  <Hamburger role="button" onClick={() => setNavOpen(!navOpen)}>
    <svg viewBox="0 0 18 15" width="20">
      <path
        fill="#1C1C21"
        d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"
      />
      <path
        fill="#1C1C21"
        d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"
      />
      <path
        fill="#1C1C21"
        d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"
      />
    </svg>
  </Hamburger>
)

export default HamburgerMenu
