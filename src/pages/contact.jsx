import React from "react"

import styled from "styled-components"

import ContactForm from "../components/ContactForm"
import Layout from "../components/layout"

import { contactSummaryText } from "../content/contact"

const ContactPage = styled.div`
  margin: 0px auto 35px;
  padding-top: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  @media screen and (max-width: 767px) {
    height: 88vh;
  }
`

const Title = styled.h2``

const contact = () => {
  return (
    <Layout>
      <ContactPage>
        <Title>Let's work together!</Title>
        <ContactForm />
        
      </ContactPage>
    </Layout>
  )
}

export default contact
