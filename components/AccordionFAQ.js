import React from 'react'
import styled from 'styled-components'
import { Accordion } from 'semantic-ui-react'

const DrgAccordion = styled(Accordion)`
	&&& {
		display: flex;
		flex-direction: column;
		width: 90vw;
		margin: 40px 0 0 0;
		background-color: rgb(46, 60, 93, 0.5);

		z-index: 999;
		@media (min-width: 1050px) {
			width: 50vw;
		}
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
	},
	{
		key: 4,
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
	},
	{
		key: 5,
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
	},
	{
		key: 6,
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
	}
]

const AccordionFAQ = () => (
	<DrgAccordion
		defaultActiveIndex={[0]}
		panels={panels}
		exclusive={false}
		fluid
		styled
	/>
)

export default AccordionFAQ
