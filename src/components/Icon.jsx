import React from "react"

import styled from "styled-components"

const IconDiv = styled.div`
  height: ${props => (props.bigger ? "75px" : "50px")};
  width: ${props => (props.bigger ? "75px" : "50px")};
  padding: 10px;
`

const Icon = ({ iconPath, bigger }) => {
  return (
    <IconDiv bigger={bigger}>  
      {/* <svg viewBox="0 0 128 128"> */}
        {iconPath}
      {/* </svg> */}
    </IconDiv>
  )
}

export default Icon
