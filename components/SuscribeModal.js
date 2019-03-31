import React, { Component } from 'react'
import DButton from '../components/Buttons'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import SuscribeFormContainer from './SuscribeFormContainer'

export default class SuscribeModal extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={ <DButton onClick={this.handleOpen} large='true' arrow='true' on>Suscribe for FREE</DButton> }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Modal.Content>
          <SuscribeFormContainer/>
        </Modal.Content>
        <Modal.Actions>
          <Button color='white' onClick={this.handleClose} inverted>
            <Icon name='close' /> Cerrar
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}