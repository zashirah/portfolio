import React from "react"

import styled from "styled-components"

const IconDiv = styled.div`
  height: 75px;
  width: 75px;
  padding: 5%;
`

const Icon = ({ iconPath }) => {
  return (
    <IconDiv>
      {/* <svg viewBox="0 0 128 128"> */}
        {iconPath}
      {/* </svg> */}
    </IconDiv>
  )
}

export default Icon
