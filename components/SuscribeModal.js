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
        trigger={ <DrgButton onClick={this.handleOpen} large='true' arrow='true' on>Suscribe for FREE</DrgButton> }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        dimmer='blurring'
        size='small'
      >
        <Modal.Header>
          <Typography h={4} weight='bold' size='title'>
            Suscribite a Dragoons
          </Typography>
        </Modal.Header>
        <Modal.Content>
          <Typography h={5} size='subheader'>
            Grandes premios y sorpresas te esperan si sos un early adopter
          </Typography>
          <SuscribeFormContainer/>
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