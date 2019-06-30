import React from 'react'
import styled from 'styled-components'

const NavigationWrapper = styled.div`
  display: none;
  flex-direction: column;
  position: fixed;
  z-index: 9999999999;
  right: 3vw;
  top: 40%;
  @media (min-width: 500px) {
    display: flex;
  }
`

const Dots = styled.div`
  position: relative;
  background-color: ${props => (props.selected ? 'white' : 'grey')};
  border-radius: 50%;
  width: 13px;
  height: 13px;
  transform: ${props => (props.selected ? 'scale(1.3)' : 'scale(1)')};
  margin: 0 0 15px 0;
  cursor: pointer;
`

class Navigation extends React.Component {
  constructor(props) {
    super(props)
  }

  click = () => {
    this.props.parentMethod()
  }

  render() {
    return (
      <NavigationWrapper onClick={this.click}>
        <a href="#top">
          <Dots selected={this.props.section === 0} />
        </a>
        <a href="#video">
          <Dots selected={this.props.section === 1} />
        </a>
        <a href="#features">
          <Dots selected={this.props.section === 2} />
        </a>
        <a href="#timeline">
          <Dots selected={this.props.section === 3} />
        </a>
        <a href="#faq">
          <Dots selected={this.props.section === 4} />
        </a>
        <a href="#contact">
          <Dots selected={this.props.section === 5} />
        </a>
      </NavigationWrapper>
    )
  }
}

export default Navigation
