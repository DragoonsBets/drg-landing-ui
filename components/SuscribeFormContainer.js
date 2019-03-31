import React from 'react'
import styled from 'styled-components'
import SuscribeForm from './SuscribeForm'
import { Button, Icon } from 'semantic-ui-react'

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
