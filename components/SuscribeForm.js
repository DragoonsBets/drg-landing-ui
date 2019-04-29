import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Form, Message, Checkbox, Divider } from 'semantic-ui-react'
import DrgButton from './Buttons'
import DrgInput from './DrgInputs'
import DrgDropdown from './DrgDropdown'
import Typography from './Typography'
import { CREATE_USERS } from '../networking/endpoints'

const SuscribeFormWrapper = styled.div`
  &&& {
    display: flex;
    align-items: center;
    padding: 0 20px;
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
    > div {
      display: flex;
    }
  }
`

const XCheckbox = styled(Checkbox)`
  &&& {
    margin: 30px 0;
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
      loading: true
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
      if (data.value == option.value){
        console.log("Value option match: ", option)
        console.log("birthday: ", birthday)
        birthday[name] = option.key
        console.log("birthday after update: ", birthday)
        return 
      }
    });

    this.setState({ birthday })

  }

  handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    this.state.loading = true

    if (!form.checkValidity()) {
      this.state.error = true
      this.state.message = 'Ocurrió un error enviando el formulario'
      this.state.loading = false
      return
    }

    if (!this.state.termsAccepted) {
      this.state.error = true
      this.state.message = 'Debes aceptar los términos y condiciones'
      this.state.loading = false
      return
    }

    console.log('user: ', this.state['birthday'])

    const user = {
      first_name: this.state['firstName'],
      last_name: this.state['lastName'],
      email: this.state['email'],
      birthday: new Date(
        this.state['birthday']['year'],
        this.state['birthday']['month'] - 1,
        this.state['birthday']['day'],
      ),
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
        this.state.success = true
        this.state.message = 'Gracias por registrarte en Dragoons'
        this.state.loading = false
      })
      .catch(error => {
        this.state.error = true
        this.state.message = 'Ocurrió un error registrandote'
        this.state.loading = false
      })
  }

  render() {
    const days = []
    const months = [{ key: 1, value: 'Enero', text: 'Enero' },
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
    { key: 12, value: 'Diciembre', text: 'Diciembre' }]
    
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
        <Typography h={3} weight="bold" size="jumbo">
          Suscríbete a Dragoons
        </Typography>
        <Typography h={4} weight="thin" size="title">
          Ingresa tus datos personales
        </Typography>
        <XForm onSubmit={this.handleSubmit}>
          <DrgInput
            name="firstName"
            label="Nombre"
            placeholder="Emilio"
            onChange={this.handleInputChange}
            required
          />
          <br />
          <DrgInput
            name="lastName"
            label="Apellido"
            placeholder="Gorzy"
            onChange={this.handleInputChange}
            required
          />
          <br />
          <DrgInput
            name="email"
            label="Email"
            placeholder="egorzy@dragoons.gg"
            onChange={this.handleInputChange}
            required
          />
          <br />
          <Divider />
          <Typography h={4} weight="thin" size="title">
            Ingresa tu fecha de nacimiento
          </Typography>
          <div>
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
          </div>
          <Divider />
          <XCheckbox
            name="termsAccepted"
            onChange={this.handleInputChange}
            label="Acepto términos y condiciones"
          />
          <XCheckbox
            name="suscribeAccepted"
            onChange={this.handleInputChange}
            label="Deseo recibir noticias y novedades sobre Dragoons"
          />
          <div>
            <Message
              hidden={!this.state.success}
              visible={this.state.success}
              header="Registro exitoso"
              success={this.state.success}
              content={this.state.message}
            />
            <Message
              visible={this.state.error}
              hidden={!this.state.error}
              header="Ocurrió un error"
              error={this.state.error}
              content={this.state.message}
            />
          </div>
          <DrgButton type="submit" large="true">
            Regístrate
          </DrgButton>
        </XForm>
      </SuscribeFormWrapper>
    )
  }
}
