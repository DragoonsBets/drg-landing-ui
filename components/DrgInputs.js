import React from 'react'
import styled from 'styled-components'
import { Input } from 'semantic-ui-react'

const DrgInputWrapper = styled(Input)`
	&&& {
		display: flex;
		> div {
			background-image: linear-gradient(to right, #822b55, #5b2a61);
			background-position: center;
			color: white;
			padding: 14px 8px;
		}
		> input {
			flex: 1;
			background-color: #131e3a;
			color: white;
			::placeholder {
				color: #4e566a;
			}
		}
	}
`

function DrgInput(props) {
	return <DrgInputWrapper {...props} />
}

export default DrgInput
