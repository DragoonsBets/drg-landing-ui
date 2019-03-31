import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Typography from '../components/Typography'
import DrgButton from '../components/Buttons'
import Player from '../components/Player'
import AccordionFAQ from '../components/AccordionFAQ'
import RoadLine from '../components/RoadLine'

const LandingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Hero = styled.div`
	@media (min-width: 900px) {
		display: flex;
		align-items: center;
		width: 100%;
	}
	> div {
		flex: 1;
	}
	> div:nth-child(1) {
		@media (min-width: 900px) {
			margin: 0 30px 0 0;
		}
		margin: 0 0 30px 0;
	}
	> div div {
		width: 100%;
		height: 400px;
		background-color: lightgrey;
	}
`

const VideoWrapper = styled.div`
	margin: 30px 0;
`

const Mission = styled.div`
	text-align: center;
`

const Features = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
	flex-wrap: wrap;
	margin: 60px 0 0 0;
	> div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 0 50px 0;
		width: 100%;
		@media (min-width: 660px) {
			width: 300px;
		}
	}
	> div:nth-child(1) {
		@media (min-width: 660px) {
			margin: 0 20px 50px 0;
		}
	}
	> div:nth-child(2) {
		@media (min-width: 978px) {
			margin: 0 20px 50px 0;
		}
	}
	> div > div:nth-child(1) {
		width: 300px;
		background-color: lightgray;
		height: 200px;
	}
`

const FAQ = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	> div:nth-child(1) {
		text-align: center;
	}
`

const Timeline = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 50px 0 0 0;
	width: 100%;
	> div:nth-child(1) {
		text-align: center;
	}
`

export default class Landing extends React.Component {
	constructor(props) {
		super(props)
		this.state = { viewportWidth: '1' }
	}
	componentDidMount() {
		this.setState({ viewportWidth: window.innerWidth })
		// window.addEventListener('resize', () =>
		// 	this.setState({ viewportWidth: window.innerWidth })
		// )
	}
	render() {
		const videoJsOptions = {
			techOrder: ['youtube'],
			autoplay: false,
			controls: true,
			width: this.state.viewportWidth,
			height: this.state.viewportWidth / 3,
			sources: [
				{
					src: 'https://www.youtube.com/watch?v=jSJr3dXZfcg',
					type: 'video/youtube'
				}
			]
		}
		return (
			<Layout
				title='Landing title'
				description='A description about the landing page'>
				<LandingWrapper>
					<Hero>
						<div>
							<div />
						</div>
						<div>
							<Typography h={2} weight='bold' size='jumbo'>
								Dragoons
							</Typography>
							<Typography h={3} weight='thin' size='title'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris.
							</Typography>
							<DrgButton large='true'>Action Button!</DrgButton>
						</div>
					</Hero>
					<VideoWrapper>
						{this.state.viewportWidth === '1' ? (
							<div>Loading...</div>
						) : (
							<Player {...videoJsOptions} />
						)}
					</VideoWrapper>
					<Mission>
						<Typography h={2} weight='bold' size='jumbo'>
							Catchy text here
						</Typography>
						<Typography h={3} weight='thin' size='title'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Typography>
					</Mission>
					<Features>
						<div>
							<div />
							<Typography h={4} weight='bold' size='headline'>
								Desafía a otros gamers
							</Typography>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<DrgButton small='true'>Leer más</DrgButton>
						</div>
						<div>
							<div />
							<Typography h={4} weight='bold' size='headline'>
								Gana votando
							</Typography>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<DrgButton small='true'>Leer más</DrgButton>
						</div>
						<div>
							<div />
							<Typography h={4} weight='bold' size='headline'>
								Apoya a tu comunidad
							</Typography>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<DrgButton small='true'>Leer más</DrgButton>
						</div>
					</Features>
					<FAQ>
						<div>
							<Typography h={3} weight='bold' size='jumbo'>
								Preguntas frecuentes
							</Typography>
						</div>
						<AccordionFAQ />
					</FAQ>
					<Timeline>
						<div>
							<Typography h={3} weight='bold' size='jumbo'>
								Próximos pasos
							</Typography>
						</div>
						<RoadLine />
					</Timeline>
				</LandingWrapper>
			</Layout>
		)
	}
}
