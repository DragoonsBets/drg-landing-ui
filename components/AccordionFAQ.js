import React from 'react'
import styled from 'styled-components'
import { Accordion } from 'semantic-ui-react'
import { GET_FAQ } from '../networking/endpoints'
import axios from 'axios'
import Typography from './Typography'

const DrgAccordion = styled(Accordion)`
	&&& {
		display: flex;
		flex-direction: column;
		width: 90vw;
		margin: 40px 0 0 0;
		background-color: rgb(46, 60, 93, 0.5);
		z-index: 999;
		@media (min-width: 1050px) {
			width: 70vw;
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

function processFaq(items) {
	let processedFaqs = []
	for (let i = 0; i < items.length; i++) {
		let faq = {}
		let temp = items[i].title_es
		faq.key = i
		faq.title = temp
		temp = items[i].body_es
		
		faq.content = temp		
		processedFaqs.push(faq)
	}
	return processedFaqs
}

export default class AccordionFAQ extends React.Component {
	constructor() {
		super()
		this.state = {
			loading: true,
			faqs: []
		}
	}

	componentDidMount() {
		axios
			.get(GET_FAQ + 'type=bets.faqPage&fields=body_es,title_es', {
				headers: {
					'Content-Type': 'application/json;'
				}
			})
			.then(res => {
				let processedFaqs = processFaq(res.data.items)
				this.setState({
					faqs: processedFaqs
				});
				this.state.loading = false
			})
			.catch(error => {
				this.state.loading = false
				this.state.faqs = []
				this.state.error = error
			})
	}

	render() {
		return (
			<React.Fragment>
				<div>
					<Typography h={3} weight='bold' size='jumbo'>
						Preguntas frecuentes
					</Typography>
				</div>
				{
					this.state.faqs.length > 0 ? 
					(
						<DrgAccordion
							defaultActiveIndex={[0]}
							panels={this.state.faqs}
							exclusive={true}
							fluid
							styled
						/>
					) 
				: 
				(
					<Typography h={4} weight='normal' color='white' size='subheader'>
						Ocurrió un error cargando las preguntas frecuentes
					</Typography>
				)}
			</React.Fragment>
		)
	}
}
