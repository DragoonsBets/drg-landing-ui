import React, { Component } from 'react'
import DrgButton from '../components/Buttons'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import SuscribeFormContainer from './SuscribeFormContainer'
import Typography from './Typography'
import styled from 'styled-components'

const DrgModal = styled(Modal)`
	top: 10%;
`
export default class SuscribeModal extends Component {
	state = { modalOpen: false }

	handleOpen = () => this.setState({ modalOpen: true })

	handleClose = () => this.setState({ modalOpen: false })

	render() {
		return (
			<DrgModal
				trigger={
					<DrgButton onClick={this.handleOpen} large='true' arrow='true' on>
						Regístrate
					</DrgButton>
				}
				open={this.state.modalOpen}
				onClose={this.handleClose}
				basic
				dimmer='blurring'
				size='small'>
				<Modal.Header>
					<Typography h={4} weight='bold' size='title'>
						¡Registrate para recibir noticias y reserva tu lugar!
					</Typography>
				</Modal.Header>
				<Modal.Content>
					<Typography h={5} size='subheader'>
						No te pierdas esta oportunidad única de participar de la Beta Cerrada de Dragoons. 
						Contamos con tu ayuda para construir un producto genial. 😃
					</Typography>
					<SuscribeFormContainer />
				</Modal.Content>
				<Modal.Actions>
					<DrgButton color='white' onClick={this.handleClose} inverted>
						<Icon name='close' /> Cerrar
					</DrgButton>
				</Modal.Actions>
			</DrgModal>
		)
	}
}
