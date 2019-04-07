import React from 'react'
import styled from 'styled-components'
import { Input, Label } from 'semantic-ui-react'

const DrgInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`

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
				color: #ffffff64;
			}
		}
	}
`

const LabelWrapper = styled(Label)`
	background: transparent;
	opacity: 0.7;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
	color: #ffffff;
	padding-left: 0;
`



function DrgInput(props) {
	return (
		<DrgInputContainer>
			{ props.label && <LabelWrapper>{props.label}</LabelWrapper> }
			<DrgInputWrapper { ...props} label={null}/>
		</DrgInputContainer>
	)
}

export default DrgInput
