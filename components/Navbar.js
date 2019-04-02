import React from 'react'
import styled from 'styled-components'
import FullScreenModal from './FullScreenModal'
import SuscribeForm from './SuscribeForm'

const NavbarWrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	z-index: 99999;
	width: 100%;
	background-color: #141928;
	padding: 14px 24px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	button {
		font-family: Raleway;
	}
	> div {
		display: flex;
		align-items: center;
	}
`

function Navbar() {
	return (
		<NavbarWrapper>
			<div>
				<img src='../static/v03-white.svg' alt='logo' width={200} />
			</div>
			<FullScreenModal>
				<SuscribeForm />
			</FullScreenModal>
		</NavbarWrapper>
	)
}

export default Navbar
