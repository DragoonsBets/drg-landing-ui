import React from 'react'
import styled from 'styled-components'
import SocialNetworks from '../components/SocialNetworks'
import { Icon } from 'semantic-ui-react'
import Typography from './Typography'

const FooterWrapper = styled.footer`
	align-items: center;
	background-color: #141928;
	color: white;
	display: flex;
	height: 80px;
	justify-content: space-between;
	padding: 20px;
	> div {
		flex: 1;
	}
	@media (max-width: 660px) {
		flex-direction: column;
		height: 200px;
		> div {
			flex: 1
		}
	}
`

const CopyrightWrapper = styled.div`
	display: inline-flex;
	justify-content: center;
	height: 30px;
	> h5 {
		margin: 0 0 0 5px;
	}
`



function Footer(props) {
	return (
		<FooterWrapper>
			<CopyrightWrapper>
				<span><Icon size='small' inverted name='copyright'/></span>
				<Typography h={5} weight='thin' size='subheader'>
					2019 - Todos los derechos reservados 
				</Typography>
			</CopyrightWrapper>
			<div style={{'flex' : '2', 'display' : 'flex', 'justify-content' : 'center'}}>
				<img
					src='/static/v01-white.svg'
					alt='Dragoons logo'
					width={60}
					height={60}
				/>
			</div>
			<div>
				<SocialNetworks />
			</div>
		</FooterWrapper>
	)
}

export default Footer
