import React from 'react'
import Player from '../components/Player'
import Layout from '../components/Layout'

export default class Test extends React.Component {
	render() {
		const videoJsOptions = {
			techOrder: ['youtube'],
			autoplay: false,
			controls: true,
			width: '640',
			height: '264',
			sources: [
				{
					src: 'https://www.youtube.com/watch?v=eoo1d0ef_M8',
					type: 'video/youtube'
				}
			]
		}

		return (
			<Layout
				title='Test title'
				description='A description about the test page'>
				<Player {...videoJsOptions} />
			</Layout>
		)
	}
}
