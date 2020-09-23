import axios from "axios"

const apiUrl = "https://api.airtable.com/v0/appWDACYToaV5KQoy/contactInfo"

export const createContact = async (name, email, message) => {
  try {
    const response = await axios.post(
      apiUrl,
      {
        fields: {
          Name: name,
          Email: email,
          Message: message,
        },
      },
      {
        headers: {
          Authorization: `Bearer keyqFqBpHT92oOSI5`,
          "Content-Type": "application/json",
        },
      }
    )
    const contacts = response.data.records
    return contacts
  } catch (error) {
    throw error
  }
}
