import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Typography from '../components/Typography'
import DrgButton from '../components/Buttons'
import MailForm from '../components/MailForm'
import Player from '../components/Player'
import AccordionFAQ from '../components/AccordionFAQ'
import RoadLine from '../components/RoadLine'
import Navigation from '../components/Navigation'
import UpArrowNavigation from '../components/UpArrowNavigation'

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
  height: auto;
  min-height: 100%;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0;
  }
  @media (min-width: 1050px) {
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-snap-points-y: repeat(100vh);
  }
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5vw;
  /* important declaration to be reviewd */
  min-height: 100vh !important;
  position: static;
  background-image: url('../static/hero.jpg');
  scroll-snap-align: start;
  @media (min-width: 900px) {
    width: 100%;
    background-size: cover;
  }
  @media (min-width: 1025px) {
    align-items: center;
    /* justify-content: flex-end; */
    flex-direction: row;
    color: #171b27;
  }
  @media (min-width: 1050px) {
    height: 100vh;
    min-height: 789px;
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

const Video = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  scroll-snap-align: start;
  @media (min-width: 1050px) {
    height: 100vh;
    min-height: 100vh;
    justify-content: center;
  }
`

const VideoLoading = styled.div`
  height: 100vh;
  min-height: 789px;
`

const Features = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 0;
  scroll-snap-align: start;
  width: 100%;
  position: relative;
  background-image: url('../static/features-background.png');
  background-size: cover;
  min-height: 100%;
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
  @media (min-width: 1050px) {
    min-height: 100vh;
  }
  > div {
    z-index: 999;
  }
`

const FeaturesTitle = styled.div`
  text-align: center;
  padding: 0 10vw;
  @media (min-width: 1050px) {
    margin: 50px 0 0 0;
    > div {
      padding: 0 22vw;
      margin: 15px 0 0 0;
    }
  }
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
    flex: 1;
    margin: 40px 0 50px 0;
    padding: 40px 20px;
    background-color: white;
    border-radius: 4px;
    color: #131929;
    > h4 {
      color: #0e3080;
    }
    @media (min-width: 1050px) {
      margin: 40px 20px 0 0;
      transform: ${props =>
        props.appear ? 'translateY(0px)' : 'translateY(150px)'};
      opacity: ${props => (props.appear ? '1' : '0.2')};
      transition: 1s;
    }
  }
  > div:last-child {
    margin: 40px 0 0 0;
    @media (min-width: 1050px) {
      margin: 40px 20px 0 0;
    }
  }
`

const FeaturesItemsImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`

const Timeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 64px 20px;
  scroll-snap-align: start;
  /* important declaration to be reviewd */
  min-height: 100vh !important;
  @media (min-width: 1050px) {
    height: 100vh;
    min-height: 789px;
  }
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

const FAQ = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 120px 0;
  scroll-snap-align: start;
  position: relative;
  background-image: url('../static/faq-background.jpg');
  background-size: cover;
  > div:nth-child(1) {
    text-align: center;
    z-index: 999;
  }
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
  @media (min-width: 770px) {
    justify-content: flex-start;
    min-height: 789px;
  }
  @media (min-width: 1050px) {
    height: 100%;
  }
  @media (min-width: 1600px) {
    min-height: 100vh;
    padding: 300px 500px 0 500px;
  }
`

const Contact = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 64px 20px 260px 20px;
  scroll-snap-align: start;
  position: relative;
  background-image: url('../static/faq-background.jpg');
  background-size: cover;
  min-height: 100vh;
  > div:nth-child(1) {
    text-align: center;
    z-index: 999;
  }
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
  @media (min-width: 1050px) {
    padding: 64px 10px 200px 10px;
    height: 100vh;
    padding: 64px 0;
  }
`
export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.child = React.createRef()
    this.state = {
      scroll: 0,
      featuresSeen: false,
      currentSection: 0,
    }
  }

  autoplayToggle = () => {
    this.child.current.playVideo()
  }

  // Safari navigation dots bug: when clicking navigation buttons the scroll event listener would not fire,
  // so a function should be declared to run states onClick
  clickMethod = () => {
    document.getElementById('wrapper').addEventListener('scroll', () =>
      this.setState(prevState => ({
        scroll: document.getElementById('wrapper').scrollTop,
        currentSection:
          this.state.scroll < window.innerHeight - 300
            ? 0
            : window.innerHeight - 300 <= this.state.scroll &&
              this.state.scroll < window.innerHeight * 2 - 300
            ? 1
            : window.innerHeight * 2 - 300 <= this.state.scroll &&
              this.state.scroll < window.innerHeight * 3 - 300
            ? 2
            : window.innerHeight * 3 - 300 <= this.state.scroll &&
              this.state.scroll < window.innerHeight * 4 - 300
            ? 3
            : window.innerHeight * 4 - 300 <= this.state.scroll &&
              this.state.scroll < window.innerHeight * 5 - 300
            ? 4
            : window.innerHeight * 5 - 300 <= this.state.scroll &&
              this.state.scroll < window.innerHeight * 6 - 300
            ? 5
            : null,
        featuresSeen:
          this.state.scroll > 1200
            ? true
            : prevState.featuresSeen
            ? true
            : false,
      })),
    )
  }

  componentDidMount() {
    document.getElementById('wrapper').addEventListener('scroll', () =>
      this.setState(prevState => ({
        scroll: document.getElementById('wrapper').scrollTop,
        currentSection:
          this.state.scroll < window.innerHeight - 300
            ? 0
            : window.innerHeight - 300 <= this.state.scroll &&
              this.state.scroll < window.innerHeight * 2 - 300
            ? 1
            : window.innerHeight * 2 - 300 <= this.state.scroll &&
              this.state.scroll < window.innerHeight * 3 - 300
            ? 2
            : window.innerHeight * 3 - 300 <= this.state.scroll &&
              this.state.scroll < window.innerHeight * 4 - 300
            ? 3
            : window.innerHeight * 4 - 300 <= this.state.scroll &&
              this.state.scroll < window.innerHeight * 5 - 300
            ? 4
            : window.innerHeight * 5 - 300 <= this.state.scroll &&
              this.state.scroll < window.innerHeight * 6 - 300
            ? 5
            : null,
        featuresSeen:
          this.state.scroll > 1200
            ? true
            : prevState.featuresSeen
            ? true
            : false,
      })),
    )
  }

  render() {
    const heroSection = (
      <Hero id="top" className="section">
        <Navbar />
        <div>
          <HeroLogo>
            <img src="../static/v02-color.svg" alt="logo" width={300} />
          </HeroLogo>
          <Typography h={3} weight="thin" size="headline">
            Únete a la única plataforma que te permite apostar y apoyar a tu
            comunidad de eSports.
          </Typography>
          <HeroButton>
            <a href="#video">
              <DrgButton
                large="true"
                arrow="true"
                onClick={this.autoplayToggle}
              >
                Ver video
              </DrgButton>
            </a>
          </HeroButton>
        </div>
      </Hero>
    )
    const videoSection = (
      <Video id="video" className="section">
        {typeof window !== 'undefined' ? (
          <Player
            sources={[
              {
                src: 'https://www.youtube.com/watch?v=jSJr3dXZfcg',
                type: 'video/youtube',
              },
            ]}
            techOrder={['youtube']}
            controls={true}
            // poster="https://upload.wikimedia.org/wikipedia/commons/9/99/SOME_LIKE_IT_HOT_TITLE.jpg"
            ref={this.child}
          />
        ) : (
          <VideoLoading>
            <img src="../static/v01-white.svg" alt="loading" width={100} />
          </VideoLoading>
        )}
      </Video>
    )
    const featuresSection = (
      <Features id="features" className="section">
        <FeaturesTitle>
          <Typography h={2} weight="bold" size="jumbo">
            ¡Gana dinero mirando eSports!
          </Typography>
          <div>
            <Typography h={3} weight="thin" size="title">
              Podrás ganar dinero haciendo lo que más te gusta, mientras apoyas
              el desarrollo de la comunidad de eSports en LATAM.{' '}
              {this.state.scrollAcumulated}
            </Typography>
          </div>
        </FeaturesTitle>
        <FeaturesItems appear={this.state.featuresSeen}>
          <div>
            <FeaturesItemsImg>
              <img
                src="../static/features-trophy.svg"
                alt="desafía a otros gamers"
                width={100}
              />
            </FeaturesItemsImg>
            <Typography h={4} weight="bold" size="headline">
              Desafía a otros
            </Typography>
            <p>
              Apuesta contra otros y demustra cuánto sabes de eSports en el
              sistema de apuestas en bolsa más transparente y confiable de la
              industria.
            </p>
          </div>
          <div>
            <FeaturesItemsImg>
              <img
                src="../static/features-vote.svg"
                alt="vota resultados"
                width={100}
              />
            </FeaturesItemsImg>
            <Typography h={4} weight="bold" size="headline">
              Vota resultados
            </Typography>
            <p>
              Te pagaremos por hacer lo que más te gusta, ¡mirar eSports!. Lo
              único que debes hacer es enviar estadísticas. ¿Quién ganó la
              partida?, ¿en que minuto cayó la torre?, etc.
            </p>
          </div>
          <div>
            <FeaturesItemsImg>
              <img
                src="../static/features-community.svg"
                alt="apoya tu comunidad"
                width={100}
              />
            </FeaturesItemsImg>
            <Typography h={4} weight="bold" size="headline">
              Apoya a tu comunidad
            </Typography>
            <p>
              Parte del dinero recaudado en las apuestas será utilizado para
              apoyar económicamente a equipos, jugadores, streamers, ligas u
              organizaciones de eSports elegidas por el voto de la comunidad.
              ¡Tu decides!
            </p>
          </div>
        </FeaturesItems>
      </Features>
    )
    const timelineSection = (
      <Timeline id="timeline" className="section">
        <div>
          <Typography h={3} weight="bold" size="jumbo">
            Próximos pasos
          </Typography>
        </div>
        <RoadLine />
      </Timeline>
    )
    // const faqSection = (
    //   <FAQ id="faq">
    //     <AccordionFAQ />
    //   </FAQ>
    // )
    const sendMailSection = (
      <Contact id="contact">
        <MailForm />
        <Footer />
      </Contact>
    )
    return (
      <Layout
        title="Landing title"
        description="A description about the landing page"
      >
        <LandingWrapper id="wrapper">
          {heroSection}
          {videoSection}
          {featuresSection}
          {timelineSection}
          {/* {faqSection} */}
          {sendMailSection}
          <Navigation
            section={this.state.currentSection}
            parentMethod={this.clickMethod}
          />
          <UpArrowNavigation scroll={this.state.scroll} />
        </LandingWrapper>
      </Layout>
    )
  }
}
