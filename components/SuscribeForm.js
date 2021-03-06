import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Form, Message, Checkbox, Divider } from 'semantic-ui-react'
import DrgButton from './Buttons'
import DrgInput from './DrgInputs'
import DrgDropdown from './DrgDropdown'
import Typography from './Typography'
import { CREATE_USERS } from '../networking/endpoints'
import Router from 'next/router'

const SuscribeFormWrapper = styled.div`
  &&& {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0 20px;
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
    width: 300px;
    @media (min-width: 500px) {
      width: 500px;
    }
    > div div:nth-child(1) {
      margin: 0 10px 0 0;
    }
    > div {
      display: flex;
    }
  }
`

const ZForm = styled.form`
  &&& {
    height: 55px;
  }
`

const SocialButtons = styled.div`
  &&& {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    width: 300px;
    border-bottom: 1px solid #333333;
    @media (min-width: 500px) {
      width: 500px;
    }
    > form {
      margin: 0 5px;
    }
  }
`

const CreateButtonWrapper = styled.div`
  &&& {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
`

const AgeSelectors = styled.div`
  &&& {
    display: flex;
    width: 300px;
    @media (min-width: 500px) {
      width: 500px;
    }
    > div {
      flex: 1;
    }
  }
`

const CheckboxesWrapper = styled.div`
  &&& {
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: 20px 0 10px 0;
    @media (min-width: 500px) {
      width: 500px;
    }
    > div {
      display: inline-flex;
      margin: 10px 0;
      text-align: center;
    }
  }
`

export default class SuscribeForm extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      termsAccepted: false,
      suscribeAccepted: false,
      birthday: {
        day: 1,
        month: 1,
        year: 1970,
      },
      error: false,
      message: '',
      success: false,
      loading: true,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDropdownChange = this.handleDropdownChange.bind(this)
    this.handleMonthChange = this.handleMonthChange.bind(this)
  }

  handleInputChange(event, data) {
    const target = event.target
    const value = data && data.type === 'checkbox' ? data.checked : target.value
    const name = data && data.type === 'checkbox' ? data.name : target.name

    this.setState({
      [name]: value,
    })
  }

  handleDropdownChange(event, data) {
    const value = data.value
    const name = data.name

    var birthday = { ...this.state.birthday }
    birthday[name] = value
    this.setState({ birthday })
  }

  handleMonthChange(event, data) {
    console.log('Month change: ', data)

    const name = data.name

    var birthday = { ...this.state.birthday }

    data.options.find(function(option) {
      if (data.value == option.value) {
        console.log('Value option match: ', option)
        console.log('birthday: ', birthday)
        birthday[name] = option.key
        console.log('birthday after update: ', birthday)
        return
      }
    })

    this.setState({ birthday })
  }

  // resetState() {
  //   this.setState({
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     termsAccepted: false,
  //     suscribeAccepted: false,
  //     birthday: {
  //       day: 1,
  //       month: 1,
  //       year: 1970,
  //     },
  //     error: false,
  //     message: '',
  //     success: false,
  //     loading: true,
  //   })
  // }

  handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    this.setState({ loading: true })

    if (!form.checkValidity()) {
      this.setState({
        success: false,
        error: true,
        message: 'Ocurrió un error enviando el formulario. Revisa los campos',
        loading: false,
      })
      return
    }

    if (!this.state.termsAccepted) {
      this.setState({
        success: false,
        error: true,
        message: 'Debes aceptar los términos y condiciones',
        loading: false,
      })
      return
    }

    const user = {
      first_name: this.state['firstName'],
      last_name: this.state['lastName'],
      email: this.state['email'],
      birthday: `${this.state['birthday']['year']}-${
        this.state['birthday']['month']
      }-${this.state['birthday']['day']}`,
      subscribed_to_news: this.state['suscribeAccepted'],
    }

    axios
      .post(
        CREATE_USERS,
        { ...user },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => {
        this.setState({
          success: true,
          error: false,
          message: '¡Bienvenido a Dragoons! Te registraste correctamente.',
          loading: false,
        })
        Router.push('/?social_login_success=true')
      })
      .catch(error => {
        console.log('Error: ', error)
        console.log(error.response)
        const data = error.response.data
        let message =
          data.email && data.email[0].code === 'email_already_registered'
            ? 'Email ya registrado'
            : 'Ocurrió un error registrandote. Revisa los campos.'
        this.setState({
          success: false,
          error: true,
          message: message,
          loading: false,
        })
      })
  }

  render() {
    const days = []
    const months = [
      { key: 1, value: 'Enero', text: 'Enero' },
      { key: 2, value: 'Febrero', text: 'Febrero' },
      { key: 3, value: 'Marzo', text: 'Marzo' },
      { key: 4, value: 'Abril', text: 'Abril' },
      { key: 5, value: 'Mayo', text: 'Mayo' },
      { key: 6, value: 'Junio', text: 'Junio' },
      { key: 7, value: 'Julio', text: 'Julio' },
      { key: 8, value: 'Agosto', text: 'Agosto' },
      { key: 9, value: 'Setiembre', text: 'Setiembre' },
      { key: 10, value: 'Octubre', text: 'Octubre' },
      { key: 11, value: 'Noviembre', text: 'Noviembre' },
      { key: 12, value: 'Diciembre', text: 'Diciembre' },
    ]

    const years = []

    var d = new Date()
    var currentYear = d.getFullYear()
    var oldest = d.getFullYear() - 81

    for (let i = 1; i < 32; i++) {
      var day = { key: i, value: i, text: i }
      days.push(day)
    }

    for (let i = currentYear; i > oldest; i--) {
      var year = { key: i, value: i, text: i }
      years.push(year)
    }

    return (
      <SuscribeFormWrapper>
        <Typography h={3} weight="bold" size="display">
          Unite al grupo
        </Typography>
        <Divider />
        <Typography h={4} weight="thin" size="title">
          Ingresa con tus redes sociales
        </Typography>
        <SocialButtons>
          {/* <ZForm action="https://backend.viserion.dragoons.gg/accounts/steam/login/?process=login">
            <DrgButton small="true" type="submit">
              Steam
            </DrgButton>
          </ZForm> */}

          <ZForm action="https://backend.viserion.dragoons.gg/accounts/google/login/?process=login">
            <DrgButton small="true" type="submit">
              Google
            </DrgButton>
          </ZForm>

          {/* <ZForm action="https://backend.viserion.dragoons.gg/accounts/facebook/login/?process=login">
            <DrgButton small="true" type="submit">
              Facebook
            </DrgButton>
          </ZForm> */}
        </SocialButtons>
        <Typography h={4} weight="thin" size="title">
          ó crea una cuenta
        </Typography>
        <XForm onSubmit={this.handleSubmit}>
          <Form.Group inline>
            <DrgInput
              fluid
              name="firstName"
              label="Nombre"
              placeholder="tu nombre"
              onChange={this.handleInputChange}
              required
            />
            <DrgInput
              fluid
              name="lastName"
              label="Apellido"
              placeholder="tu apellido"
              onChange={this.handleInputChange}
              required
            />
          </Form.Group>
          <br />
          <DrgInput
            name="email"
            label="Email"
            placeholder="tu email"
            onChange={this.handleInputChange}
            required
          />
          <br />
          <Divider />
          <div style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Typography h={4} weight="thin" size="title">
              Fecha de nacimiento
            </Typography>
            <AgeSelectors>
              <DrgDropdown
                tag={'Día'}
                name="day"
                options={days}
                onChange={this.handleDropdownChange}
              />
              <DrgDropdown
                tag={'Mes'}
                name="month"
                options={months}
                onChange={this.handleMonthChange}
              />
              <DrgDropdown
                tag={'Año'}
                name="year"
                options={years}
                onChange={this.handleDropdownChange}
              />
            </AgeSelectors>
          </div>
          <br />
          <Divider />
          <CheckboxesWrapper>
            <Checkbox
              name="termsAccepted"
              onChange={this.handleInputChange}
              label="Acepto los términos y condiciones."
            />
            <Checkbox
              name="suscribeAccepted"
              onChange={this.handleInputChange}
              label="Deseo recibir noticias y novedades."
            />
          </CheckboxesWrapper>
          <div
            style={{
              margin: '0 0 20px 0',
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            {this.state.success && (
              <Message
                positive
                header="Registro exitoso"
                content={this.state.message}
              />
            )}
            {this.state.error && (
              <Message
                positive={false}
                header="Error"
                content={this.state.message}
              />
            )}
          </div>
          <CreateButtonWrapper>
            <DrgButton type="submit" large="true">
              Crear
            </DrgButton>
          </CreateButtonWrapper>
        </XForm>
      </SuscribeFormWrapper>
    )
  }
}
