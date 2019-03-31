import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

const SocialNetworksWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
`

function SocialNetworks(props) {
	return (
		<SocialNetworksWrapper>
				<a href='//instagram.com/dragoons' target='_blank' rel="noopener noreferrer">
					<Icon size='big' inverted link name='instagram' />
				</a>
				<a href='//twitter.com/dragoons' target='_blank' rel="noopener noreferrer">
					<Icon size='big' inverted link name='twitter' />
				</a>
				<a href='//discord.com/dragoons' target='_blank' rel="noopener noreferrer">
					<Icon size='big' inverted link name='btc' />
				</a>
		</SocialNetworksWrapper>
	)
}

export default SocialNetworks
