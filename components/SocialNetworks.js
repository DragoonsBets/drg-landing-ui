import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

const SocialNetworksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

function SocialNetworks() {
  return (
    <SocialNetworksWrapper>
      <a
        href="/instagram.com/dragoons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="instagram" size="big" inverted link />
      </a>
      <a
        href="/twitter.com/DragoonsBets"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="twitter" size="big" inverted link />
      </a>
      <a href="/discord.gg/vbeeKZd" target="_blank" rel="noopener noreferrer">
        <Icon name="discord" size="big" inverted link />
      </a>
    </SocialNetworksWrapper>
  )
}

export default SocialNetworks
