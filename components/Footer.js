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
	> div {
		flex: 1;
	}
`

const CopyrightWrapper = styled.div`
	display: inline-flex;
	height: 30px;
	flex: 2;
	> h5 {
		margin: 0 0 0 5px;
	}
`

function Footer(props) {
	return (
		<FooterWrapper>
			<div>
				<img
					src='/static/v01-white.svg'
					alt='Dragoons logo'
					width={30}
					height={30}
				/>
			</div>
			<CopyrightWrapper>
				<span><Icon size='small' inverted name='copyright'/></span>
				<Typography h={5} weight='thin' size='subheader'>
					2019 - Dragoons - Todos los derechos reservados 
				</Typography>
			</CopyrightWrapper>
			<div>
				<SocialNetworks />
			</div>
		</FooterWrapper>
	)
}

export default Footer
