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
				<div>Beta cerrada</div>
				<div>
					Se seleccionará a un grupo de usuarios que tendrá la posibilidad de
					probar la plataforma, brindar sus comentarios y obtener una recompensa
					por participar del proceso.
				</div>
			</RoadLineItem>
			<RoadLineItem>
				<div>Beta abierta</div>
				<div>
					Los usuarios podrán participar de todo el ciclo; crear apuestas,
					validar y seleccionar a los distintos equipos, streamers, ligas y
					organizaciones que apoyarán utilizando dinero ficticio. Se
					recompensará aquellos usuarios que participen y brinden sus
					comentarios.
				</div>
			</RoadLineItem>
			<RoadLineItem>
				<div>Lanzamiento</div>
				<div>
					Go live de la plataforma, en donde podrás apostar, votar y apoyar a tu
					comunidad.
				</div>
			</RoadLineItem>
		</RoadLineWrapper>
	)
}

export default RoadLine
