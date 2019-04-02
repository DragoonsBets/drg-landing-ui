import React, { Component } from 'react'
import videojs from 'video.js'
import 'videojs-youtube'
import 'video.js/dist/video-js.css'

class Player extends Component {
	componentDidMount() {
		// instantiate Video.js
		this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
			console.log('onPlayerReady', this)
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
					<video ref={node => (this.videoNode = node)} className='video-js' />
				</div>
			</div>
		)
	}
}

export default Player
