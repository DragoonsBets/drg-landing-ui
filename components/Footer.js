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
	height: 100px;
	justify-content: space-between;
	padding: 20px;
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
	flex: 2;
	justify-content: center;
	height: 30px;
	> h5 {
		margin: 0 0 0 5px;
	}
`

function Footer(props) {
	return (
		<FooterWrapper>
			<div>
				<img
					src='/static/v03-white.svg'
					alt='Dragoons logo'
					width={100}
				/>
			</div>
			<CopyrightWrapper>
				<span><Icon size='small' inverted name='copyright'/></span>
				<Typography h={5} weight='thin' size='subheader'>
					2019 - Todos los derechos reservados 
				</Typography>
			</CopyrightWrapper>
			<div>
				<SocialNetworks />
			</div>
		</FooterWrapper>
	)
}

export default Footer
