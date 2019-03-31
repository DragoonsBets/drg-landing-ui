import React from 'react'
import styled from 'styled-components'
import SuscribeForm from './SuscribeForm'
import { Button, Icon } from 'semantic-ui-react'

// const DrgButton = styled.button()`
//   color: #0d2f80
// `

const FormContainer = styled.div`
  display: flex;
  flex: 1;

  align-items: 'center';
  justify-content: 'center';
  color: #0d2f80;
`

function SuscribeFormContainer(props) {
	return (
		<FormContainer>
      <SuscribeForm />
		</FormContainer>
	)
}

export default SuscribeFormContainer
