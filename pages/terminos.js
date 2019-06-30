import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Typography from '../components/Typography'
import Navbar from '../components/Navbar'

const TermsWrapper = styled.div`
  margin: 64px 0 0 0;
  color: black;
  padding: 2vw;
`

export default () => (
  <Layout title="Términos y condiciones" description="Terminos y condiciones para acceder a los servicios de la plataforma Dragoons.gg">
    <TermsWrapper>
      <Navbar />
      Términos y condiciones
    </TermsWrapper>
  </Layout>
)
