import React from 'react'
import styled from 'styled-components'

const Arrow = styled.div`
  position: fixed;
  right: calc(3vw - 10px);
  bottom: 100px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 0 15px 0;
  cursor: pointer;
  transform: ${props =>
    props.visible > 600 ? 'translateY(0)' : 'translateY(400px)'};
  transition: 0.3s;
`

const Img = styled.img`
  width: 100%;
`

function UpArrowNavigation(props) {
  return (
    <a href="#top">
      <Arrow visible={props.scroll}>
        <Img src="../static/up-arrow.png" alt="flecha" />
      </Arrow>
    </a>
  )
}

export default UpArrowNavigation
