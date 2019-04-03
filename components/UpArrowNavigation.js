import React from 'react'
import styled from 'styled-components'
import jump from 'jump.js'

const Arrow = styled.div`
	position: fixed;
	right: 30px;
	bottom: 20px;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	margin: 0 0 15px 0;
	cursor: pointer;
	transform: ${props =>
		props.visible > 600 ? 'translateY(0)' : 'translateY(100px)'};
	transition: 0.3s;
`

const Img = styled.img`
	width: 100%;
`

function UpArrowNavigation(props) {
	function handleClick(e) {
		jump(e, {
			duration: 1000,
			offset: -72
		})
	}
	return (
		<Arrow onClick={() => handleClick('#top')} visible={props.scroll}>
			<Img src='../static/up-arrow.png' alt='flecha' />
		</Arrow>
	)
}

export default UpArrowNavigation
