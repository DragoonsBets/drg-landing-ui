import React from 'react'
import styled from 'styled-components'
import { Accordion } from 'semantic-ui-react'

const XAccordion = styled(Accordion)`
	&& {
		display: flex;
		flex-direction: column;
		width: 50%;
		padding: 0 30px;
		margin: 40px 0 0 0;
		> div {
			width: 100%;
			font-family: Raleway;
			color: white;
		}
		> div:nth-child(2n) {
			font-size: 14px;
		}
		> div:nth-child(2n + 1) {
			font-size: 20px;
		}
	}
`

const panels = [
	{
		key: 1,
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
	},
	{
		key: 2,
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
	},
	{
		key: 3,
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
	}
]

const AccordionFAQ = () => (
	<XAccordion
		defaultActiveIndex={[0]}
		panels={panels}
		exclusive={false}
		fluid
	/>
)

export default AccordionFAQ
