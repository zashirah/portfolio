import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const TYPage = styled.div`
  margin: 0px auto 35px;
  padding-top: 100px;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`

const thankYou = () => {
  return (
    <Layout>
      <TYPage>
        <h1>
          Thank you for reaching out. I am looking forward to getting to know
          you and getting to work!
        </h1>
      </TYPage>
    </Layout>
  )
}

export default thankYou
