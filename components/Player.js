import React, { Component } from 'react'
import styled from 'styled-components'
import videojs from 'video.js'
import 'videojs-youtube'
import 'video.js/dist/video-js.css'

const XVideo = styled.video`
	width: 100vw;
	pointer-events: none;
	button {
		top: calc(50% - 20px);
		left: calc(50% - 43px);
	}
`

class Player extends Component {
	componentDidMount() {
		// instantiate Video.js
		this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
			// callback
		})
	}

	componentWillUnmount() {
		// destroy player on unmount
		if (this.player) {
			this.player.dispose()
		}
	}

	render() {
		return (
			<div>
				<div data-vjs-player>
					<XVideo
						ref={node => (this.videoNode = node)}
						className='video-js'
						style={{ height: window.innerHeight - 72 }}
					/>
				</div>
			</div>
		)
	}
}

export default Player
