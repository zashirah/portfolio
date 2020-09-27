import { navigate } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { createContact } from "../services/contactInfo"

const Form = styled.form`
  border-radius: 15px;
  box-shadow: 0px 1px 5px 1px var(--olive);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FormRow = styled.div`
  padding: 12px;
`

const FormLable = styled.label``

const FormInput = styled.input``

const FormTextArea = styled.textarea`
  margin-bottom: 5px;
`
const FormButton = styled.button`
  background-color: var(--red);
  color: var(--white);
  font-size: 18px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 1px var(--olive);
  padding: 5px;
  border: none;
`

const FormText = styled.p`
  padding: 0px;
  margin-top: 5px;
`

const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const { name, email, message } = formData

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await createContact(name, email, message)
    navigate("/thank-you")
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormText>Leave a message</FormText>
      <FormRow>
        <FormLable htmlFor="name">Name: </FormLable>
        <FormInput
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <FormLable htmlFor="email">Email: </FormLable>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
      </FormRow>
      <FormLable htmlFor="message">Message: </FormLable>
      <FormTextArea
        name="message"
        type="long-text"
        rows="8"
        cols="25"
        value={message}
        onChange={handleChange}
      />
      <FormButton> Submit </FormButton>
      <FormText>Or reach out directly:</FormText>
      <FormText>@ (770) 778-7387</FormText>
      <FormText>or ZachShirah01@gmail.com</FormText>
    </Form>
  )
}

export default ContactForm
