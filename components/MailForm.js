import React from 'react'
import styled from 'styled-components'
import { Form, Message, Divider } from 'semantic-ui-react'
import Typography from './Typography'
import DrgInput from './DrgInputs'
import DrgButton from './Buttons'

const MailFormWrapper = styled.div`
  &&& {
    font-family: Raleway;
    input,
    h3,
    h4 {
      font-family: Raleway;
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
    }
  }
`

class MailForm extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      error: false,
      message: '',
      success: false,
    }

    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <MailFormWrapper>
        <Typography h={3} weight="bold" size="jumbo">
          Contáctanos
        </Typography>
        <XForm onSubmit={this.handleSubmit}>
          <div>
            <XDrgInput
              name="firstName"
              label="Nombre"
              placeholder="Emilio"
              onChange={this.handleInputChange}
              required
            />
            <XDrgInput
              name="lastName"
              label="Apellido"
              placeholder="Gorzy"
              onChange={this.handleInputChange}
              required
            />
          </div>
          <Divider />
          <DrgInput
              name="email"
              label="Email"
              placeholder="hola@dragoons.gg"
              onChange={this.handleInputChange}
              required
            />
          <Divider />
          <div>
            <DrgInput
              name="about"
              label="Asunto"
              placeholder="Consulta"
              onChange={this.handleInputChange}
              required
            />
            <br />
            <TextArea label="Cuerpo" placeholder="Cuéntanos más..." rows="6" />
          </div>
          <Divider />
          <div>
            <Message
              hidden={!this.state.success}
              visible={this.state.success}
              header="Registro exitoso"
              content={this.state.successMessage}
            />
            <Message
              visible={this.state.error}
              hidden={!this.state.error}
              header="Ocurrió un error"
              content={this.state.errorMessage}
            />
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
