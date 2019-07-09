import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import FullScreenModal from './FullScreenModal'
import SuscribeForm from './SuscribeForm'
import SocialRegistrationMessage from './SocialRegistrationMessage'

const NavbarWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  background-color: #131929;
  padding: 9px 24px;
  height: 64px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  button {
    font-family: Montserrat, Raleway;
  }
  > div {
    display: flex;
    align-items: center;
  }
  > div:nth-child(1) {
    display: none;
  }
  @media (min-width: 500px) {
    > div:nth-child(1) {
      display: block;
    }
    > div:nth-child(2) {
      display: none;
    }
  }
`

function Navbar() {
  return (
    <NavbarWrapper>
      <div>
        <Link href="/">
          <a>
            <img src="../static/v03-white.svg" alt="logo" width={150} />
          </a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>
            <img src="../static/v01-white.svg" alt="logo" width={42} />
          </a>
        </Link>
      </div>
      <FullScreenModal opened={false}>
        <SuscribeForm />
      </FullScreenModal>
    </NavbarWrapper>
  )
}

export default Navbar
