import React from 'react'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import { keyframes } from 'styled-components'

const animation = keyframes`
  0%{background-position:10% 50%}
  100%{background-position:100% 50%}
`

const DrgButtonWrapper = styled(Button)`
  display: flex;
  font-weight: bold;
  color: ${props => (props.disabled ? 'rgba(255, 255, 255, 0.6)' : 'white')};
  font-size: ${props =>
    props.large ? '16px' : props.small ? '14px' : 'inherit'};
  padding: ${props =>
    props.large ? '15px 16px' : props.small ? '9px 14px' : '8px'};
  border-radius: 4px;
  min-width: ${props => (props.large ? '88px' : props.small ? '80px' : '0')};
  background-image: linear-gradient(to right, #ab1e4d, #51286a);
  background-size: 180% 200%;
  transition: 1s;
  :hover {
    animation-name: ${animation};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    background-position: 100% 50%;
    background-image: linear-gradient(to right, #ab1e4d, #51286a);
    color: white;
  }
  :focus {
    color: white;
    box-shadow: 0 0 1pt 1pt #13317b;
  }
  :active {
    border-bottom: 4px solid #16164f;
    padding: 10px 16px;
  }
  span:nth-child(1) {
    font-size: ${props =>
      props.large ? '12px' : props.small ? '10px' : 'inherit'};
    margin: ${props =>
      props.large ? '0 6px 0 0' : props.small ? '0 5px 0 0' : '0'};
    display: ${props => (props.star ? 'inline' : 'none')};
  }
  span:nth-child(2) {
    font-size: ${props =>
      props.large ? '30px' : props.small ? '25px' : 'inherit'};
    margin: ${props =>
      props.large ? '0 0 0 6px' : props.small ? '0 0 0 5px' : '0'};
    display: ${props => (props.arrow ? 'inline' : 'none')};
  }
`

function DrgButton(props) {
  return (
    <DrgButtonWrapper
      large={props.large}
      small={props.small}
      star={props.star}
      arrow={props.arrow}
      disabled={props.disabled}
      {...props}
    >
      {props.star && (
        <span style={{ margin: '-7px', marginLeft: '10px' }}>
          <Icon size="tiny" inverted name="star" />
        </span>
      )}
      {props.children}
      {props.arrow && (
        <span style={{ margin: '-7px', marginLeft: '10px' }}>
          <Icon size="tiny" inverted name="arrow right" />
        </span>
      )}
    </DrgButtonWrapper>
  )
}

export default DrgButton
