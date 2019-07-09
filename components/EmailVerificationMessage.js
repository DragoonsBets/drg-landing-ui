import React, { Component } from 'react'
import styled from 'styled-components'

const SocialRegistrationMessageWrapper = styled.div`
  &&&&&&&&&&&& {
    height: 100%;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      > b {
        font-size: 33px;
      }
      > p {
        font-size: 20px;
        margin: 0 0 120px 0;
      }
      > img {
        width: 100px;
        margin: 0 0 40px 0;
      }
    }
  }
`

class EmailVerificationMessage extends Component {
  
  render() {
    return (
      <SocialRegistrationMessageWrapper>
        <div>
          <img src="../static/v01-white.svg" alt="Dragoons Logo" />
          <b>Gracias por verificar tu email</b>
          <br />
          <p>Tu email ha sido verificado correctamente.</p>
        </div>
      </SocialRegistrationMessageWrapper>
    )
  }
}

export default EmailVerificationMessage
