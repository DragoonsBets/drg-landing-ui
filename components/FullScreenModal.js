import React, { Component } from 'react'
import styled from 'styled-components'
import { Modal, Icon } from 'semantic-ui-react'
import DrgButton from './Buttons'

const ModalWrapper = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  margin: 0;
  box-shadow: none;
  background-color: #131929;
  color: white;
  button {
    font-family: Raleway;
  }
  label {
    color: white;
  }
  label:hover {
    color: white;
  }
  input:focus + label {
    color: white;
  }
`

const ModalCenter = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
`

const Cross = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`

export default class FullScreenModal extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <ModalWrapper
        trigger={
          <DrgButton onClick={this.handleOpen} small="true" arrow="true">
            Regístrate
          </DrgButton>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        dimmer="blurring"
      >
        <ModalCenter>{this.props.children}</ModalCenter>
        <Cross>
          <Icon name="close" size="big" onClick={this.handleClose} />
        </Cross>
      </ModalWrapper>
    )
  }
}
