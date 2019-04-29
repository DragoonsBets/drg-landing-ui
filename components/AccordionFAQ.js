import React from 'react'
import styled from 'styled-components'
import { Accordion } from 'semantic-ui-react'
import { GET_FAQ } from '../networking/endpoints'
import axios from 'axios'
import Typography from './Typography'

const DrgAccordionWarning = styled(Accordion)`
  text-align: center;
  margin: 30px 0 0 0;
  z-index: 999;
  color: grey;
  text-align: center;
`

const DrgAccordion = styled(Accordion)`
  &&& {
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: 40px 0 0 0;
    background-color: rgba(46, 60, 93, 0.5);
    z-index: 999;
    @media (min-width: 1050px) {
      width: 70vw;
    }
    > div {
      width: 100%;
      font-family: Raleway;
      color: white;
    }
    > div:nth-child(2n) {
      font-size: 14px;
    }
    > div:nth-child(2n + 1) {
      font-size: 20px;
    }
  }
`

function processFaq(items) {
  let processedFaqs = []
  for (let i = 0; i < items.length; i++) {
    let faq = {}
    let temp = items[i].title
    faq.key = i
    faq.title = temp
    temp = items[i].body
    faq.content = temp
    processedFaqs.push(faq)
  }
  return processedFaqs
}

export default class AccordionFAQ extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      faqs: [
        {
          key: '¿Cómo funciona el sistema de apuestas?',
          title: '¿Cómo funciona el sistema de apuestas?',
          content: {
            content: (
              <div>
                <p>
                  El sistema de apuestas que utiliza Dragoons es el Pari-mutuel
                  betting. Este consiste en un sistema en el cual los
                  apostadores colocan dinero en una bolsa común, y el dinero se
                  reparte a las apuestas ganadoras en proporción al monto
                  apostado. Los dividendos se calculan dividiendo la bolsa a
                  repartir entre el monto apostado al resultado ganador.
                </p>
              </div>
            ),
          },
        },
        {
          key: '¿Por qué se le solicita a los usuarios votar?',
          title: '¿Por qué se le solicita a los usuarios votar?',
          content: {
            content: (
              <div>
                <p>
                  El resultado de las apuestas en Dragoons será definido por la
                  votación de los usuarios. Esto se debe a que las casas de
                  apuestas tradicionales controlan de forma unilateral la
                  decisión del resultado de una apuesta, este exceso de poder ha
                  generado en situaciones conductas abusivas frente a los
                  apostadores.
                </p>
              </div>
            ),
          },
        },
        {
          key: '¿Por qué se le solicita a los usuarios votar?',
          title: '¿Por qué se le solicita a los usuarios votar?',
          content: {
            content: (
              <div>
                <p>
                  Los usuarios podrán votar el resultado de las apuestas
                  propuestas por la comunidad durante la transmisión del evento.
                  Si la votación es correcta, es decir que coincide con el
                  consenso votado por el resto de los viewers obtendrá XP y
                  dinero. En el caso del Dinero este lo podrán ganar siempre y
                  cuando se encuentre entre los votantes con más XP.
                </p>
                <p>
                  Un porcentaje del dinero a repartir entre los votantes será
                  destinado a pagar de forma aleatoria a entre los votantes, es
                  decir que no únicamente aquellos votantes con mayor XP tendrán
                  la posibilidad de cobrar por votar el resultado de la apuesta.
                </p>
              </div>
            ),
          },
        },
        {
          key: '¿Que pasa si un usuario vota de forma incorrecta?',
          title: '¿Que pasa si un usuario vota de forma incorrecta?',
          content: {
            content: (
              <div>
                <p>
                  Si la votación es incorrecta, es decir que no coincide con el
                  consenso votado por el resto de los viewers se le restará XP y
                  se le asigna un strike. El disminuir XP implica que tendrá
                  menos posibilidad a futuro de ganar dinero por votar. Los
                  strikes por otra parte reflejan la cantidad de votaciones
                  incorrectas, el acumular strikes resulta en distinto tipos de
                  sanciones, desde suspensiones hasta la expulsión de la
                  plataforma.
                </p>
              </div>
            ),
          },
        },
        {
          key: '¿De donde surge el dinero para los votantes?',
          title: '¿De donde surge el dinero para los votantes?',
          content: {
            content: (
              <div>
                <p>
                  El dinero que se repartirá entre los distintos votantes surge
                  de un porcentaje del monto apostado en la apuesta para la cual
                  se está votando.
                </p>
              </div>
            ),
          },
        },
        {
          key: '¿Cómo apoyo a la comunidad de esports?',
          title: '¿Cómo apoyo a la comunidad de esports?',
          content: {
            content: (
              <div>
                <p>
                  Un porcentaje del dinero apostado será recaudado y asignado a
                  un pozo, para el cual los usuarios podrán elegir mes a mes la
                  institución, equipo o streamer que lo recibirá.
                </p>
              </div>
            ),
          },
        },
        {
          key:
            '¿Cuales son los beneficios de participar en la Beta cerrada y abierta?',
          title:
            '¿Cuales son los beneficios de participar en la Beta cerrada y abierta?',
          content: {
            content: (
              <div>
                <p>
                  Previo al inicio tanto de la beta cerrada como abierta se
                  informará de los beneficios por participar.
                </p>
              </div>
            ),
          },
        },
      ],
    }
  }

  // componentDidMount() {
  //   axios
  //     .get(GET_FAQ + 'type=bets.faqPage&fields=body', {
  //       headers: {
  //         'Content-Type': 'application/json;',
  //       },
  //     })
  //     .then(res => {
  //       let processedFaqs = processFaq(res.data.items)
  //       this.setState({
  //         faqs: processedFaqs,
  //       })
  //       this.state.loading = false
  //     })
  //     .catch(error => {
  //       this.state.loading = false
  //       this.state.faqs = []
  //       this.state.error = error
  //     })
  // }

  render() {
    return (
      <React.Fragment>
        <div>
          <Typography h={3} weight="bold" size="jumbo">
            Preguntas frecuentes
          </Typography>
        </div>
        {this.state.faqs.length > 0 ? (
          <DrgAccordion
            defaultActiveIndex={[0]}
            panels={this.state.faqs}
            exclusive={true}
            fluid
            styled
          />
        ) : (
          <DrgAccordionWarning>
            <Typography h={4} weight="normal" color="white" size="subheader">
              Ocurrió un error cargando las preguntas frecuentes
            </Typography>
          </DrgAccordionWarning>
        )}
      </React.Fragment>
    )
  }
}
