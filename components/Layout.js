import Head from 'next/head'
import styled from 'styled-components'
import Page from './Page'
import Fonts from './Fonts'
// import an empty css in static
import 'video.js/dist/video-js.css'

import { GA_TRACKING_ID } from '../lib/gtag'

// fonts to be added more elegantly
// https://www.npmjs.com/package/styled-jsx#server-side-rendering
const LayoutWrapper = styled.div`
  color: white;
  font-weight: 200;
  overflow: hidden;
  caption {
    font-size: 12px;
    line-height: 16px;
  }
  * {
    font-family: Montserrat, Raleway;
  }
`

class Layout extends React.Component {
  componentDidMount() {
    Fonts()
  }
  render() {
    const {
      children,
      title = 'This is the default title',
      description = 'This is the default description',
    } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
          />
          {/*  */}
          <link
            href="https://use.fontawesome.com/releases/v5.2.0/css/svg-with-js.css"
            rel="stylesheet"
          />
          {/* favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="../static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="../static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="../static/favicon-16x16.png"
          />
          <link rel="manifest" href="../static/site.webmanifest" />
          <link
            rel="mask-icon"
            href="../static/safari-pinned-tab.svg"
            color="#ffffff"
          />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="theme-color" content="#ffffff" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${GA_TRACKING_ID}');
					`,
            }}
          />
        </Head>
        <LayoutWrapper>
          <Page>{children}</Page>
        </LayoutWrapper>
      </React.Fragment>
    )
  }
}

export default Layout
