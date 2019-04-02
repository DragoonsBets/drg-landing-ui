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
			termsAccepted: '',
			marketingAccepted: '',
			birthday: '',
			error: false,
			success: false
		}

		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleInputChange(event) {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name

		this.setState({
			[name]: value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		const form = event.target

		if (!event.target.checkValidity()) {
			// form is invalid! so we do nothing
			this.state.error = true
			this.state.errorMessage = 'Ocurrió un error enviando el formulario.'
			return
		}

		if (!this.state.termsAccepted) {
			this.state.error = true
			this.state.errorMessage = 'Debes aceptar los términos y condiciones.'
			return
		}

		const user = {
			firstName: this.state['firstName'],
			lastName: this.state['lastName'],
			email: this.state['email'],
			birthday: this.state['birthday'],
			password1: '12345678',
			password2: '12345678'
		}

		axios
			.post(
				CREATE_USERS,
				{ user },
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			)
			.then(res => {
				this.state.success = true
			})
			.catch(error => {
				this.state.error = error
			})
	}

	render() {
		const days = []
		const months = []
		const years = []

		var d = new Date()
		var currentYear = d.getFullYear()
		var oldest = d.getFullYear() - 81

		for (let i = 1; i < 32; i++) {
			var day = { key: i, value: i, text: i }
			days.push(day)
		}

		for (let i = 1; i < 13; i++) {
			var month = { key: i, value: i, text: i }
			months.push(month)
		}

		for (let i = currentYear; i > oldest; i--) {
			var year = { key: i, value: i, text: i }
			years.push(year)
		}
		return (
			<SuscribeFormWrapper>
				<Typography h={3} weight='bold' size='jumbo'>
					Suscríbete a Dragoons
				</Typography>
				<Typography h={4} weight='thin' size='title'>
					Ingresa tus datos personales
				</Typography>
				<XForm success onSubmit={this.handleSubmit}>
					<DrgInput
						name='firstName'
						label='Nombre'
						placeholder='Emilio'
						onChange={this.handleInputChange}
						required
					/>
					<br />
					<DrgInput
						name='lastName'
						label='Apellido'
						placeholder='Gorzy'
						onChange={this.handleInputChange}
						required
					/>
					<br />
					<DrgInput
						name='email'
						label='Email'
						placeholder='john@dragoons.gg'
						onChange={this.handleInputChange}
						required
					/>
					<br />
					<Divider />
					<Typography h={4} weight='thin' size='title'>
						Ingresa tu fecha de nacimiento
					</Typography>
					<div>
						<DrgDropdown tag={'Día'} options={days} />
						<DrgDropdown tag={'Mes'} options={months} />
						<DrgDropdown tag={'Año'} options={years} />
					</div>
					<XCheckbox
						name='terms'
						onChange={this.handleInputChange}
						label='Acepto términos y condiciones'
					/>
					<XCheckbox
						name='newsletter'
						onChange={this.handleInputChange}
						label='Deseo recibir noticias y novedades sobre Dragoons'
					/>
					<div>
						<Message
							hidden={!this.state.success}
							visible={this.state.success}
							header='Registro exitoso'
							content='Gracias por registrarte en Dragoons!'
						/>
						<Message
							visible={this.state.error}
							hidden={!this.state.error}
							header='Action Forbidden'
							content={this.state.errorMessage}
						/>
					</div>
					<DrgButton type='submit' large='true'>
						Regístrate
					</DrgButton>
				</XForm>
			</SuscribeFormWrapper>
		)
	}
}
