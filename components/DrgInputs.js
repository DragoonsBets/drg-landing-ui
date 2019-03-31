import React from 'react'
import styled from 'styled-components'
import { Input, Icon } from 'semantic-ui-react'

const DrgInputWrapper = styled(Input)`
	display: flex;
	flex: 1;
	font-weight: bold;
	color: 'white';
	font-size: ${props =>
		props.large ? '18px' : props.small ? '16px' : 'inherit'};
	border-radius: 4px;
	min-width: ${props => (props.large ? '88px' : props.small ? '80px' : '0')};
	background-position: center;
	background-color: '#111e3c';
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
			icon={props.icon}
			{...props}>
		</DrgInputWrapper>
	)
}

export default DrgInput
