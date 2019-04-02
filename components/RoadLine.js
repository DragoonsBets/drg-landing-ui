import React from 'react'
import styled from 'styled-components'

const RoadLineWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	position: relative;
	width: 90%;
	@media (min-width: 700px) {
		width: 50%;
	}
	:before {
		content: '';
		width: 5px;
		background-image: linear-gradient(#982d4e, #512b65);
		position: absolute;
		top: 70px;
		left: 13px;
		height: 440px;
		@media (min-width: 369px) {
			height: 420px;
		}
		@media (min-width: 381px) {
			height: 410px;
		}
		@media (min-width: 434px) {
			height: 390px;
		}
		@media (min-width: 477px) {
			height: 350px;
		}
		@media (min-width: 658px) {
			height: 330px;
		}
		@media (min-width: 681px) {
			height: 330px;
		}
		@media (min-width: 700px) {
			height: 390px;
		}
		@media (min-width: 780px) {
			height: 390px;
		}
		@media (min-width: 858px) {
			height: 375px;
		}
		@media (min-width: 1000px) {
			height: 350px;
		}
		@media (min-width: 1100px) {
			height: 335px;
		}
		@media (min-width: 1300px) {
			height: 300px;
		}
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
				<div>Beta cerrada - Q2 2019</div>
				<div>
					<strong>Registrate ahora</strong> para tener la oportunidad de participar del proceso de 
					creación de nuestra plataforma, brindar tus comentarios y ¡obtener una recompensa
					por participar!.
				</div>
			</RoadLineItem>
			<RoadLineItem>
				<div>Beta abierta - Q3 2019</div>
				<div>
					Podrás utilizar el sitio web completo utilizando dinero ficticio.
				</div>
			</RoadLineItem>
			<RoadLineItem>
				<div>Lanzamiento - Q4 2019</div>
				<div>
					Go live de la plataforma en donde podrás apostar, votar y apoyar a tu
					comunidad.
				</div>
			</RoadLineItem>
		</RoadLineWrapper>
	)
}

export default RoadLine
