import React from 'react'
import styled from 'styled-components'
import SuscribeModal from './SuscribeModal'

const NavbarWrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #141928;
	padding: 24px;
	> div {
		display: flex;
		align-items: center;
	}
`

const LogoText = styled.h1`
	font-size: 30px;
	font-weight: 500;
	margin: 0 0 0 5px;
	color: white;
`

function Navbar(props) {
	return (
		<NavbarWrapper>
			<div>
				<LogoText>Dragoons</LogoText>
			</div>
			<div>
				<SuscribeModal />
			</div>
		</NavbarWrapper>
	)
}

export default Navbar
