import React from 'react'
import App, { Container } from 'next/app'

import FullScreenModal from '../components/FullScreenModal'
import SocialRegistrationMessage from '../components/SocialRegistrationMessage'
import EmailVerificationMessage from '../components/EmailVerificationMessage';

import '../styles/fontawesome'
import { withRouter } from 'next/router'


class MyApp extends App {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    console.log("App initial props: ", pageProps, router)
    return { pageProps }
  }

  render() {
    const { Component, pageProps, router } = this.props
    return (
      <Container>
        <Component {...pageProps} />
        { router.query.social_login_success && (
          <FullScreenModal opened={true}>
            <SocialRegistrationMessage />
          </FullScreenModal>)
        }
        { router.query.email_verification_success && (
          <FullScreenModal opened={true}>
            <EmailVerificationMessage />
          </FullScreenModal>)
        }
      </Container>
    )
  }
}

export default withRouter(MyApp)
