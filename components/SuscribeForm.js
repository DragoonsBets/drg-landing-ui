import React, { Component }  from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { Form, Message, Checkbox, Button } from 'semantic-ui-react'
import DrgButton from './Buttons';

const FormWrapper = styled.div`
	align-items: center;
	color: white;
	flex: 1;
	justify-content: center;
`

export default class SuscribeForm extends React.Component {

	constructor() {
    super();
    this.state = {
			firstName: '',
			lastName: '',
			email: '',
			termsAccepted: '',
			birthDate: '',
			error: false,
			success: false
		}

		this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

		this.setState({
      [name]: value
    });
  
  }

	handleSubmit = event => {
		event.preventDefault();
		const form = event.target;
		console.log("Form: ", form.elements);
		
		if (!event.target.checkValidity()) {
			// form is invalid! so we do nothing
			this.state.error = true
			return;
		}

		if (!this.state.termsAccepted)
		{
			this.state.error = true
		}

    const user = {
			firstName: this.state['firstName'],
			lastName:  this.state['lastName'],
			email:  this.state['email'],
			termsAccepted:  this.state['termsAccepted'],
			birthDate: this.state['birthDate']
    };

		console.log("User data: ", user);
    axios.post('https://jsonplaceholder.typicode.com/users', { user })
      .then(res => {
				this.state.success = true;
        console.log(res);
        console.log(res.data);
			})
			.catch(error => {
				console.log(error);
				this.state.error = error;
			})
	}
	
	render() {
		return (
			<FormWrapper>
				<Form success onSubmit={this.handleSubmit}>
					<Form.Group widths='equal'>
						<Form.Input fluid name='firstName' label='Nombre' placeholder='Nombre' onChange={this.handleInputChange} required/>
						<Form.Input fluid name='lastName' label='Apellido' placeholder='Apellido' onChange={this.handleInputChange} required/>
					</Form.Group>	
					<Form.Group widths='equal'>
						<Form.Input fluid name='email' label='Email' placeholder='john@dragoons.gg' onChange={this.handleInputChange} required/>
						{/* <Form.Field label='Fecha de nacimiento' control={CustomCalendar} start='1' end='7' /> */}
					</Form.Group>	
					<Form.Field>
						<Checkbox name='termsAccepted' label='Acepto terminos y condiciones' onChange={this.handleInputChange} />
					</Form.Field>
					<Message hidden={!this.state.success} visible={this.state.success} header='Registro exitoso' content="Gracias por registrarte en Dragoons!" />
					<Message
						visible={this.state.error}
						hidden={!this.state.error}
						header='Action Forbidden'
						content={this.state.errorMessage}
					/>
					<DrgButton type='submit'>Submit</DrgButton>
				</Form>
			</FormWrapper>
		)
	}
}
