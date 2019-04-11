import React from 'react'
import styled from 'styled-components'
import { Dropdown } from 'semantic-ui-react'

const XDropdown = styled(Dropdown)`
	&&& {
		background-color: #242A38;
		color: white;
		margin: 0 10px 0 0;
		:nth-last-child() {
			margin: 0;
		}
		div {
			background-color: #242A38;
			color: white;
			border: 0;
			outline: none;
			:hover {
				background-color: ;
			}
		}
		::placeholder {
			color: red;
		}
	}
`

function DrgDropdown(props) {
  return (
    <XDropdown
      placeholder={props.tag}
      fluid
      search
      selection
      options={props.options}
      {...props}
    />
  )
}

export default DrgDropdown
