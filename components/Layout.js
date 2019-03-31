import Head from 'next/head'
import styled from 'styled-components'
import Navbar from './Navbar'
// import an empty css in static
import 'video.js/dist/video-js.css'
import Footer from './Footer'

// fonts to be added more elegantly
// https://www.npmjs.com/package/styled-jsx#server-side-rendering
const LayoutWrapper = styled.div`
	min-height: 100vh;
	font-family: Raleway;
	color: white;
	padding: 120px 0 0 0;
	font-weight: 200;
	button,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: Raleway;
	}
	caption {
		font-size: 12px;
		line-height: 16px;
	}
`

export default ({
	children,
	title = 'This is the default title',
	description = 'This is the default description'
}) => (
	<React.Fragment>
		<Head>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link
				rel='stylesheet'
				href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css'
			/>
			<link
				href='https://fonts.googleapis.com/css?family=Raleway:200,300,400,500'
				rel='stylesheet'
			/>
		</Head>
		<Navbar />
		<LayoutWrapper>{children}</LayoutWrapper>
		<Footer />
	</React.Fragment>
)
