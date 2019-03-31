import React from 'react'
import styled from 'styled-components'
import SuscribeForm from './SuscribeForm'

const FormContainer = styled.div`
	display: flex;
	flex: 1;
	align-items: 'center';
	justify-content: 'center';
`

function SuscribeFormContainer(props) {
	return (
		<FormContainer>
			<SuscribeForm />
		</FormContainer>
	)
}

export default SuscribeFormContainer
