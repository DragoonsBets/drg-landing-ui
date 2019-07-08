import React, { Component } from 'react'
import styled from 'styled-components'
import { Modal, Icon } from 'semantic-ui-react'
import DrgButton from './Buttons'

const ModalWrapper = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 0;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  margin: 0;
  box-shadow: none;
  background-color: #131929;
  color: white;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 30px 0 0 0;
  button {
    font-family: Raleway;
    margin: 0 0 30px;
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
  @media (min-width: 500px) {
    align-items: center;
  }
`

const ModalCenter = styled.div`
  position: relative;
  height: 100%;
  @media (min-width: 500px) {
    align-items: center;
  }
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
            Unite
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
