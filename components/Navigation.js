import React from 'react'
import styled from 'styled-components'

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 2vw;
  top: 50%;
`

const Dots = styled.div`
  background-color: grey;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 0 0 15px 0;
  cursor: pointer;
`

function Navigation() {
  return (
    <NavigationWrapper>
      <a href="#video">
        <Dots />
      </a>
      <a href="#features">
        <Dots />
      </a>
      <a href="#timeline">
        <Dots />
      </a>
      <a href="#faq">
        <Dots />
      </a>
    </NavigationWrapper>
  )
}

export default Navigation
