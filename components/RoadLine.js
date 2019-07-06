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
  @media (min-width: 1600px) {
    width: 30%;
  }
  :before {
    content: '';
    width: 5px;
    background-image: linear-gradient(#982d4e, #512b65);
    position: absolute;
    top: 70px;
    left: 13px;
    height: ${props => props.roadlineTotal};
  }
`

const RoadLineItem = styled.div`
  > div {
    transform: translateY(-10px);
  }
  > div:nth-child(1) {
    margin: 0 0 0 50px;
    line-height: 35px;
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

class RoadLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = { roadline1: undefined, roadline2: undefined }
  }
  componentDidMount() {
    this.setState({
      roadline1: document.getElementById('roadline1').clientHeight,
      roadline2: document.getElementById('roadline2').clientHeight,
    })
    window.addEventListener('resize', () =>
      this.setState({
        roadline1: document.getElementById('roadline1').clientHeight,
        roadline2: document.getElementById('roadline2').clientHeight,
      }),
    )
  }
  render() {
    return (
      <RoadLineWrapper
        roadlineTotal={`${this.state.roadline1 + this.state.roadline2 + 60}px`}
      >
        <RoadLineItem id="roadline1">
          <div>Beta cerrada - Q3 2019</div>
          <div>
            <strong>Registrate ahora</strong> para tener la oportunidad de
            participar del proceso de creación de nuestra plataforma, brindar
            tus comentarios y ¡obtener una recompensa por participar!.
          </div>
        </RoadLineItem>
        <RoadLineItem id="roadline2">
          <div>Beta abierta - Q4 2019</div>
          <div>
            Podrás utilizar el sitio web completo utilizando dinero ficticio.
          </div>
        </RoadLineItem>
        <RoadLineItem>
          <div>Lanzamiento - Q1 2020</div>
          <div>
            Go live de la plataforma en donde podrás apostar, votar y apoyar a
            tu comunidad.
          </div>
        </RoadLineItem>
      </RoadLineWrapper>
    )
  }
}

export default RoadLine
