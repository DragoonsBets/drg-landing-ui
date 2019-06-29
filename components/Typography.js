import React from 'react'

// make it stateless but declare a constant (H) before returning
class Typography extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const H = 'h' + this.props.h
    return (
      <H
        style={{
          color: this.props.color ? this.props.color : 'white',
          lineHeight:
            this.props.size === 'mega'
              ? '80px'
              : this.props.size === 'jumbo'
              ? '64px'
              : this.props.size === 'display'
              ? '48px'
              : this.props.size === 'headline'
              ? '32px'
              : this.props.size === 'title'
              ? '28px'
              : this.props.size === 'subheader'
              ? '24px'
              : 'inherit',
          fontSize:
            this.props.size === 'mega'
              ? '64px'
              : this.props.size === 'jumbo'
              ? '48px'
              : this.props.size === 'display'
              ? '36px'
              : this.props.size === 'headline'
              ? '24px'
              : this.props.size === 'title'
              ? '20px'
              : this.props.size === 'subheader'
              ? '16px'
              : '1px',
          fontWeight:
            this.props.weight === 'bold'
              ? '500'
              : this.props.weight === 'thin'
              ? '200'
              : '0',
        }}
        weight={this.props.weight}
      >
        {this.props.children}
      </H>
    )
  }
}

export default Typography
