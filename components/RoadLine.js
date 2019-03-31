import React from 'react'
import styled from 'styled-components'

const RoadLineWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	position: relative;
	width: 50%;
	:before {
		content: '';
		width: 5px;
		height: 310px;
		background-image: linear-gradient(#982d4e, #512b65);
		position: absolute;
		top: 70px;
		left: 13px;
	}
`

const RoadLineItem = styled.div`
	> div:nth-child(1) {
		margin: 0 0 0 50px;
	}
	> div:nth-child(2) {
		font-size: 14px;
		margin: 20px 0 0 50px;
	}
	margin: 20px 0;
	font-size: 30px;
	:before {
		content: '';
		display: inline-block;
		width: 30px;
		height: 30px;
		background-image: radial-gradient(#982d4e, #512b65);
		padding: 0 20px 0 0;
		border-radius: 50%;
		border: 3px solid white;
		transform: translateY(25px);
	}
`

function RoadLine(props) {
	return (
		<RoadLineWrapper>
			<RoadLineItem>
				<div>Beta cerrada</div>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
					laudantium, reprehenderit ducimus at sint ipsum alias enim, vero
					officia consectetur sed, rem a dicta eveniet. Error eaque tenetur
					incidunt in!
				</div>
			</RoadLineItem>
			<RoadLineItem>
				<div>Beta abierta</div>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
					laudantium, reprehenderit ducimus at sint ipsum alias enim, vero
					officia consectetur sed, rem a dicta eveniet. Error eaque tenetur
					incidunt in!
				</div>
			</RoadLineItem>
			<RoadLineItem>
				<div>Lanzamiento</div>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
					laudantium, reprehenderit ducimus at sint ipsum alias enim, vero
					officia consectetur sed, rem a dicta eveniet. Error eaque tenetur
					incidunt in!
				</div>
			</RoadLineItem>
		</RoadLineWrapper>
	)
}

export default RoadLine
