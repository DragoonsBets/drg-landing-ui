import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const SocialNetworksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const XFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: white;
`

const SocialLink = styled.a`
  margin: 0 10px 0 0;
`

function SocialNetworks() {
  return (
    <SocialNetworksWrapper>
      <SocialLink
        href="/instagram.com/dragoons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <XFontAwesomeIcon icon={['fab', 'instagram']} fixedWidth size="2x" />
      </SocialLink>
      <Link route="https://www.instagram.com/dragoonsbets/">
        <SocialLink>
          <XFontAwesomeIcon icon={['fab', 'twitter']} fixedWidth size="2x" />
        </SocialLink>
      </Link>
      <SocialLink
        href="/discord.gg/vbeeKZd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <XFontAwesomeIcon icon={['fab', 'discord']} fixedWidth size="2x" />
      </SocialLink>
      <SocialLink
        href="/discord.gg/vbeeKZd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <XFontAwesomeIcon icon={['fab', 'facebook']} fixedWidth size="2x" />
      </SocialLink>
    </SocialNetworksWrapper>
  )
}

export default SocialNetworks
