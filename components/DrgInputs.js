import React from 'react'
import styled from 'styled-components'
import { Input } from 'semantic-ui-react'

const DrgInputWrapper = styled(Input)`
	display: flex;
	font-weight: bold;
	color: 'grey';
	font-size: ${props =>
		props.large ? '18px' : props.small ? '16px' : 'inherit'};
	border-radius: 4px;
	background-position: center;
	background-color: ${props =>
		props.color
			? '#111e3c'
			: 'linear-gradient(red, #512b65)'
		};
	:hover {
		background-image: linear-gradient(#982d4e, #512b65);
		color: white;
	}
	:focus {
		color: white;
		box-shadow: 0 0 1pt 1pt #13317b;
	}
`

function DrgInput(props) {
	return (
		<DrgInputWrapper
			{...props}>
		</DrgInputWrapper>
	)
}

export default DrgInput
