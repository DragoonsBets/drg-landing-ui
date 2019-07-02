import React from 'react'
import styled from 'styled-components'
import { Form, Message, Divider } from 'semantic-ui-react'
import Typography from './Typography'
import DrgInput from './DrgInputs'
import DrgButton from './Buttons'
import { CONTACT_FORM } from '../networking/endpoints'
import axios from 'axios'

const MailFormWrapper = styled.div`
  &&& {
    font-family: Montserrat, Raleway;
    input,
    h3,
    h4 {
      font-family: Montserrat, Raleway;
    }
  }
`

const XForm = styled(Form)`
  &&& {
    text-align: left;
    > div:nth-child(1) {
      display: flex;
    }
    > div:nth-child(2) {
      display: block;
    }
  }
`

const XDrgInput = styled(DrgInput)`
  &&& {
    margin: 0 5px 0 0;
  }
`

const TextArea = styled(Form.TextArea)`
  &&& {
    > label {
      color: white;
      font-weight: 200;
      font-size: 12px;
    }
    > textarea {
      background-color: #131e3a;
      color: white;
      max-height: 300px;
    }
  }
`

class MailForm extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      email: '',
      subject: '',
      body: '',
      message: '',
      success: false,
      error: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.resetState = this.resetState.bind(this)

  }

  handleInputChange(event, data) {
    const target = event.target
    const value = data && data.type === 'checkbox' ? data.checked : target.value
    const name = data && data.type === 'checkbox' ? data.name : target.name

    this.setState({
      [name]: value,
    })
  }

  // resetState() {
  //   this.setState({
  //     firstName: '',
  //     email: '',
  //     subject: '',
  //     body: '',
  //     message: '',
  //     success: false,
  //     error: false
  //   })
  // } 

  handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    this.state.loading = true

    if (!form.checkValidity()) {
      this.state.error = true
      this.state.message = 'Hay errores en el formulario. Revisa que el campo email sea un campo válido'
      this.state.loading = false
      return
    }

    const body = {
      first_name: this.state['firstName'],
      email_from: this.state['email'],
      subject: this.state['subject'],
      body: this.state['body'],
    }

    axios
      .post(
        CONTACT_FORM,
        { ...body },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => {
        this.setState({success: true, error: false, message: 'Gracias por contactarnos. Te contactaremos lo antes posible.', loading: false});
      })
      .catch(error => {
        this.setState({success: false, error: true, message: 'Ocurrió un error registrandote. Revisa los campos.', loading: false});
      })
  }


  render() {
    console.log("State: ", this.state)
    return (
      <MailFormWrapper>
        <Typography h={3} weight="bold" size="jumbo">
          Contacto
        </Typography>
        <XForm onSubmit={this.handleSubmit}>
          <div>
            <XDrgInput
              name="firstName"
              label="Nombre"
              placeholder="tu nombre"
              onChange={this.handleInputChange}
              required
            />
            <DrgInput
              name="email"
              label="Email"
              placeholder="tu email"
              onChange={this.handleInputChange}
              required
            />
          </div>
          <Divider />
          <div>
            <DrgInput
              name="subject"
              label="Asunto"
              placeholder="ingresa un asunto"
              onChange={this.handleInputChange}
              required
            />
            <br />
            <TextArea name="body" label="Mensaje" placeholder="" rows="6" onChange={this.handleInputChange} required/>
          </div>
          <Divider />
          <div>
            {
              this.state.success && <Message
              positive
              header="Contacto exitoso"
              content={this.state.message}
            />
            }
            {
              this.state.error && <Message
              positive={false}
              header="Error"
              content={this.state.message}
            />
            }
          </div>
          <div>
            <DrgButton type="submit" small="true">
              Enviar
            </DrgButton>
          </div>
        </XForm>
      </MailFormWrapper>
    )
  }
}

export default MailForm
