import React from 'react'
import styled from 'styled-components'
import jump from 'jump.js'
import Layout from '../components/Layout'
import Typography from '../components/Typography'
import DrgButton from '../components/Buttons'
import Player from '../components/Player'
import AccordionFAQ from '../components/AccordionFAQ'
import RoadLine from '../components/RoadLine'
import Navigation from '../components/Navigation'
import UpArrowNavigation from '../components/UpArrowNavigation'

const LandingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Hero = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: calc(100vh - 72px);
	padding: 0 5vw;
	@media (min-width: 900px) {
		width: 100%;
		background-size: cover;
	}
	@media (min-width: 1025px) {
		align-items: center;
		justify-content: flex-end;
		flex-direction: row;
		color: #171b27;
		background-image: url('../static/hero.jpg');
	}
	> div {
		text-align: center;
		@media (min-width: 1025px) {
			flex: 0 0 40%;
		}
	}
`

const HeroLogo = styled.div`
	text-align: center;
`

const HeroButton = styled.div`
	display: flex;
	justify-content: center;
	margin: 30px 0 0 0;
`

const VideoWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: calc(100vh - 72px);
`

const VideoLoading = styled.div``

const Features = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 50px 0 0 0;
	min-height: calc(100vh - 72px);
	@media (min-width: 1050px) {
		padding: 50px 0;
	}
	position: relative;
	background-image: url('../static/features-background.png');
	background-size: cover;
	:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: linear-gradient(to bottom right, #000000, #000000);
		opacity: 0.6;
	}
	> div {
		z-index: 999;
	}
`

const FeaturesTitle = styled.div`
	text-align: center;
	padding: 0 10vw;
`

const FeaturesItems = styled.div`
	text-align: center;
	width: 300px;
	margin: 30px 0 0 0;
	@media (min-width: 1050px) {
		display: flex;
		width: 1000px;
	}
	> div {
		margin: 40px 0 50px 0;
		padding: 0 10px;
		@media (min-width: 1050px) {
			margin: 40px 10px 0 0;
		}
	}
`

const FeaturesItemsImg = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
`

const FAQ = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	min-height: calc(100vh - 72px);
	> div:nth-child(1) {
		text-align: center;
		z-index: 999;
	}
	position: relative;
	background-image: url('../static/faq-background.jpg');
	background-size: cover;
	:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: linear-gradient(to bottom right, #000000, #000000);
		opacity: 0.6;
	}
`

const Timeline = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	min-height: calc(100vh - 72px);
	> div:nth-child(1) {
		text-align: center;
		z-index: 999;
	}
	position: relative;
	background-image: url('../static/roadmap-background.jpg');
	background-size: cover;
	:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: linear-gradient(to bottom right, #000000, #000000);
		opacity: 0.6;
	}
`

export default class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			scroll: undefined,
			autoplay: false
		}
	}

	autoplayToggle() {
		this.setState({ autoplay: true })
		jump('#video', {
			duration: 1000,
			offset: -72
		})
	}

	componentDidMount() {
		this.setState({ scroll: window.scrollY })
		window.addEventListener('scroll', () =>
			this.setState({ scroll: window.scrollY })
		)
	}

	render() {
		return (
			<Layout
				title='Landing title'
				description='A description about the landing page'>
				<LandingWrapper>
					<Hero id='top'>
						<div>
							<HeroLogo>
								<img src='../static/v02-color.svg' alt='logo' width={300} />
							</HeroLogo>
							<Typography h={3} weight='bold' size='headline'>
								Únete a la única plataforma que te permite apostar y apoyar a tu
								comunidad de eSports.
							</Typography>
							<HeroButton>
								<DrgButton
									large='true'
									arrow='true'
									onClick={this.autoplayToggle.bind(this)}>
									Ver video
								</DrgButton>
							</HeroButton>
						</div>
					</Hero>
					<VideoWrapper id='video'>
						{typeof window !== 'undefined' && this.state.scroll !== 0 ? (
							<Player
								sources={[
									{
										src: 'https://www.youtube.com/watch?v=jSJr3dXZfcg',
										type: 'video/youtube'
									}
								]}
								techOrder={['youtube']}
								controls={true}
								autoplay={this.state.autoplay}
							/>
						) : (
							<VideoLoading>
								<img src='../static/v01-white.svg' alt='loading' width={100} />
							</VideoLoading>
						)}
					</VideoWrapper>
					<Features id='features'>
						<FeaturesTitle>
							<Typography h={2} weight='bold' size='jumbo'>
								¡Gana dinero mirando eSports!
							</Typography>
							<Typography h={3} weight='thin' size='title'>
								En Dragoons podrás ganar dinero haciendo lo que más te gusta,
								mientras apoyas al desarrollo de la comunidad de eSports en
								LATAM.
							</Typography>
						</FeaturesTitle>
						<FeaturesItems>
							<div>
								<FeaturesItemsImg>
									<img
										src='../static/features-trophy.svg'
										alt='desafía a otros gamers'
										width={100}
									/>
								</FeaturesItemsImg>
								<Typography h={4} weight='bold' size='headline'>
									Desafía a otros gamers
								</Typography>
								<p>
									Desafía otros gamers, creando apuestas y demostrando cuánto
									sabes de esports, en el sistema más transparente y confiable
									de la industria.
								</p>
							</div>
							<div>
								<FeaturesItemsImg>
									<img
										src='../static/features-vote.svg'
										alt='desafía a otros gamers'
										width={100}
									/>
								</FeaturesItemsImg>
								<Typography h={4} weight='bold' size='headline'>
									Gana votando
								</Typography>
								<p>
									Los usuarios podrán votar el resultado de las apuestas
									creadas, si votas de forma correcta podrás ganar dinero de
									forma directa.
								</p>
							</div>
							<div>
								<FeaturesItemsImg>
									<img
										src='../static/features-community.svg'
										alt='desafía a otros gamers'
										width={100}
									/>
								</FeaturesItemsImg>
								<Typography h={4} weight='bold' size='headline'>
									Apoya a tu comunidad
								</Typography>
								<p>
									Con el dinero recolectado, mensualmente se apoyará
									económicamente a distintos equipos, streamers, ligas y
									organizaciones elegidas por la comunidad.
								</p>
							</div>
						</FeaturesItems>
					</Features>
					<Timeline id='timeline'>
						<div>
							<Typography h={3} weight='bold' size='jumbo'>
								Próximos pasos
							</Typography>
						</div>
						<RoadLine />
					</Timeline>
					<FAQ id='faq'>
						<AccordionFAQ />
					</FAQ>
					<Navigation />
					<UpArrowNavigation scroll={this.state.scroll} />
				</LandingWrapper>
			</Layout>
		)
	}
}
