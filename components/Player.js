import React from 'react'
import styled from 'styled-components'
import videojs from 'video.js'
import 'videojs-youtube'
import 'video.js/dist/video-js.css'

const XVideo = styled.video`
  width: 100vw;
  button {
    top: calc(50% - 20px);
    left: calc(50% - 43px);
  }
`

class Player extends React.Component {
  constructor(props) {
    super(props)
  }

  playVideo = () => {
    this.player.play()
  }

  // instantiate Video.js
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      // callback
    })
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render() {
    return (
      <div data-vjs-player>
        <XVideo
          ref={node => (this.videoNode = node)}
          className="video-js"
          style={{ height: window.innerHeight - 64 }}
        />
      </div>
    )
  }
}

export default Player
