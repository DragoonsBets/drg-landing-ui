import React from 'react'
import styled from 'styled-components'
import jump from 'jump.js'

const NavigationWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	right: 30px;
	top: 50%;
`

const Dots = styled.div`
	background-color: grey;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	margin: 0 0 15px 0;
	cursor: pointer;
`

function Navigation() {
	function handleClick(e) {
		jump(e, {
			duration: 1000,
			offset: -72
		})
	}
	return (
		<NavigationWrapper>
			<Dots onClick={() => handleClick('#video')} />
			<Dots onClick={() => handleClick('#features')} />
			<Dots onClick={() => handleClick('#timeline')} />
			<Dots onClick={() => handleClick('#faq')} />
		</NavigationWrapper>
	)
}

export default Navigation
