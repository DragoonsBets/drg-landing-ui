import React, { Component } from 'react'
import styled from 'styled-components'
import { Modal, Icon } from 'semantic-ui-react'
import DrgButton from './Buttons'

const ModalWrapper = styled(Modal)`
  display: flex !important;
  height: 1000px;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  width: 100%;
  top: 0;
  right: -450px;
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
  @media (min-width: 1025px) {
    left: 450px;
  }
`

const ModalCenter = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 100%;
  width: 80%;
  @media (min-width: 1025px) {
    width: 100%;
  }
`

const Cross = styled.div`
  position: absolute;
  right: 2vw;
  top: 2vw;
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
					<DrgButton onClick={this.handleOpen} small='true' arrow='true'>
						Regístrate
					</DrgButton>
				}
				open={this.state.modalOpen}
				onClose={this.handleClose}
				dimmer='blurring'>
				<ModalCenter>{this.props.children}</ModalCenter>
				<Cross>
					<Icon name='close' size='big' onClick={this.handleClose} />
				</Cross>
			</ModalWrapper>
		)
	}
}
