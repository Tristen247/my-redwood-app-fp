import {
  Form,
  TextAreaField,
  TextField,
  Submit,
  FieldError,
  Label,
} from '@redwoodjs/forms'
import { Metadata, useMutation } from '@redwoodjs/web'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`
/* On Submit Form Action */
const ContactPage = () => {
  const [create] = useMutation(CREATE_CONTACT)
  const onSubmit = (data) => {
    console.log(data)
    create({
      variables: {
        input: data,
      },
    })
  }
  return (
    <>
      <Metadata title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
        <h1>Contact Me</h1>
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          name="name"
          id="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          id="email"
          validation={{
            required: true,
            pattern: { value: /^[^@]+@[^.]+\..+$/ },
          }}
        />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          name="message"
          id="message"
          validation={{ required: true }}
        />
        <FieldError name="message" className="error" />
        <Submit>Send message</Submit>
      </Form>
    </>
  )
}

export default ContactPage
