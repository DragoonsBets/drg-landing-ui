import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Typography from '../components/Typography'
import Navbar from '../components/Navbar'

const TermsWrapper = styled.div`
  margin: 72px 0 0 0;
  color: black;
  padding: 2vw;
`

export default () => (
  <Layout title="TyC title" description="A description about the TyC page">
    <TermsWrapper>
      <Navbar />
      Términos y condiciones
    </TermsWrapper>
  </Layout>
)
