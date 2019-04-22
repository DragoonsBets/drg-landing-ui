import React from 'react'
import styled from 'styled-components'
import { Accordion } from 'semantic-ui-react'
import Typography from './Typography'
import to from '../lib/to';
import { loadFaqs, processFaq }   from './FAQUtils'


const DrgAccordionWarning = styled(Accordion)`
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
    background-color: rgb(46, 60, 93, 0.5);
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

export default class AccordionFAQ extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      faqs: [],
      error: false, 
    }    

  }

  async componentDidMount() {

    this.setState({
      loading: true,
    });

    let [error, faqs] = await loadFaqs();

    console.log("Outside faqs: ", error, faqs);

    if (error) {
      this.setState({
        faqs: [],
        error: error, 
        loading: false
      })
    }
    else{
      let processedFaqs = processFaq(faqs)
      this.setState({
        error: null, 
        faqs: processedFaqs,
        loading: false
      })
    }    

  }

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
