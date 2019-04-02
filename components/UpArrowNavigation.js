import React from 'react'
import styled from 'styled-components'
import jump from 'jump.js'

const Arrow = styled.div`
	position: fixed;
	right: 30px;
	bottom: 20px;
	background-color: white;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	margin: 0 0 15px 0;
	cursor: pointer;
`

function UpArrowNavigation() {
	function handleClick(e) {
		jump(e, {
			duration: 1000,
			offset: -72
		})
	}
	return <Arrow onClick={() => handleClick('#top')} />
}

export default UpArrowNavigation
