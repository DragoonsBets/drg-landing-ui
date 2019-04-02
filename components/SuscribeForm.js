import React from 'react'
import styled from 'styled-components'
import { Form, Message, Checkbox, Label } from 'semantic-ui-react'
import DrgButton from './Buttons'
import DrgInput from './DrgInputs'
import { CREATE_USERS } from '../networking/endpoints'
import axios from 'axios'

const FormWrapper = styled.div`
	color: white;
	flex: 1;
	justify-content: center;
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
		return (
			<FormWrapper>
				<Form success onSubmit={this.handleSubmit}>
					<Form.Group widths='equal'>
						<DrgInput
							fluid
							name='firstName'
							label='Nombre'
							placeholder='Ingresa tu nombre'
							onChange={this.handleInputChange}
							required
						/>
						<DrgInput
							fluid
							name='lastName'
							label='Apellido'
							placeholder='Ingresa tu apellido'
							onChange={this.handleInputChange}
							required
						/>
					</Form.Group>
					<Form.Group widths='equal'>
						<DrgInput
							fluid
							name='email'
							label='e-mail'
							icon='email'
							iconPosition='left'
							placeholder='Ingresa tu email'
							onChange={this.handleInputChange}
							required
						/>
						{/* <Calendar
							onChange={this.handleInputChange}
							value={this.state.date}
						/> */}
					</Form.Group>
					<Form.Field>
						<Checkbox
							name='termsAccepted'
							onChange={this.handleInputChange}
						/>
						<Label color='#141928' pointing='left' content='Acepto los términos y condiciones.' ></Label>
					</Form.Field>
					<Form.Field>
						<Checkbox
							name='marketingAccepted'
							onChange={this.handleInputChange}
							checked='true'
						/>
						<Label color='#141928' pointing='left' content='Deseo recibir noticias y novedades de Dragoons.' ></Label>
					</Form.Field>
					<Message
						hidden={!this.state.success}
						visible={this.state.success}
						header='Registro exitoso'
						content='¡Gracias por registrarte!'
					/>
					<Message
						visible={this.state.error}
						hidden={!this.state.error}
						header='Action Forbidden'
						content={this.state.errorMessage}
					/>
					<DrgButton type='submit' large>Registrame</DrgButton>
				</Form>
			</FormWrapper>
		)
	}
}
