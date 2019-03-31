import React from 'react'
import styled from 'styled-components'
import Typography from './Typography'
import { Form, Message, Button } from 'semantic-ui-react'

const FormWrapper = styled.footer`
	align-items: center;
	background-color: #141928;
	color: white;
	display: flex;
	height: 100px;
	justify-content: space-between;
	padding: 20px;
	> div {
		flex: 1;
	}
`

function SuscribeForm(props) {
	return (
		<FormWrapper>
			<Typography h={3} weight='bold' size='jumbo'>
				Suscribite a Dragoons
			</Typography>
			<Typography h={4} weight='bold' size='jumbo'>
				Grandes premios y sorpresas te esperan si sos un Rookie
			</Typography>
			<Form success>
				<Form.Input icon='email' action='Suscribirme' placeholder='Ingresa tu email...'/>
				<Form.Input icon='name' placeholder='Ingresa tu email...'/>
				<Form.Input icon='surname' placeholder='Ingresa tu email...'/>
				<Form.Input icon='email' action='Suscribirme' placeholder='Ingresa tu email...'/>
				<Message success header='Registro exitoso' content="Gracias por registrarte en Dragoons!" />
				<Message
					error
					header='Action Forbidden'
					content='You can only sign up for an account once with a given e-mail address.'
				/>				
				<Form.Checkbox label='Acepto acuerdo de confidencialidad, terminos y condiciones.' error/>
				<Button type='submit'>Submit</Button>
			</Form>
		</FormWrapper>
	)
}

export default SuscribeForm
