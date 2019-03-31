import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Icon, Divider } from 'semantic-ui-react'
import Layout from '../components/Layout'
import DButton from '../components/Buttons'
import Typography from '../components/Typography'

const IndexWrapper = styled.div`
	/* display: flex;
	flex-direction: column; */
`

export default () => (
	<Layout
		title='Landing title'
		description='A description about the landing page'>
		<IndexWrapper>
			<Typography h={1} weight='bold' size='display'>
				Components
			</Typography>
			<Divider />
			<Typography h={2} weight='bold' size='headline'>
				Buttons
			</Typography>
			<p>
				Dummy icons for behavior purposes, check out Semantic built in icons,
				example: <Icon name='star' />
				<Icon name='caret down' />
				<Icon name='grid layout' />
				<Icon name='content' />
			</p>
			<p>
				<b>Props</b>
			</p>
			<p>size: large, small</p>
			<p>type: text, icon</p>
			<p>icons: star, arrow (check if icons vary a lot)</p>
			<p>shape: straight, circle, curve</p>
			<DButton large='true'>Button</DButton>
			<br />
			{/* <DButton large disabled>
				Button
			</DButton>
			<br /> */}
			<DButton large='true' arrow='true'>
				Button
			</DButton>
			<br />
			<DButton large='true' star='true'>
				Button
			</DButton>
			<br />
			<DButton large='true' star='true' arrow='true'>
				Button
			</DButton>
			<br />
			<DButton small='true'>Button</DButton>
			<br />
			<DButton small='true' star='true'>
				Button
			</DButton>
			<br />
			<DButton small='true' arrow='true'>
				Button
			</DButton>
			<br />
			<DButton small='true' star='true' arrow='true'>
				Button
			</DButton>
			<br />
			<DButton star='true' />
			<Divider />
			<Typography h={2} weight='bold' size='headline'>
				Typography
			</Typography>
			<p>
				<b>Props</b>
			</p>
			<p>h: 1, 2, etc (sets the tag, ex. h1, h2, etc)</p>
			<p>weight: thin, bold</p>
			<Typography h={1} weight='thin' size='mega'>
				Mega
			</Typography>
			<Typography h={1} weight='bold' size='mega'>
				Mega
			</Typography>
			<Typography h={2} weight='thin' size='jumbo'>
				Jumbo
			</Typography>
			<Typography h={2} weight='bold' size='jumbo'>
				Jumbo
			</Typography>
			<Typography h={3} weight='thin' size='display'>
				Display
			</Typography>
			<Typography h={3} weight='bold' size='display'>
				Display
			</Typography>
			<Typography h={4} weight='thin' size='headline'>
				Headline
			</Typography>
			<Typography h={4} weight='bold' size='headline'>
				Headline
			</Typography>
			<Typography h={5} weight='thin' size='title'>
				Title
			</Typography>
			<Typography h={5} weight='bold' size='title'>
				Title
			</Typography>
			<Typography h={5} weight='thin' size='subheader'>
				Subheader
			</Typography>
			<Typography h={5} weight='bold' size='subheader'>
				Subheader
			</Typography>
			<p>Body</p>
			<p>
				<b>Body</b>
			</p>
			{/* <caption>Caption</caption>
			<caption>
				<b>Caption</b>
			</caption> */}
			<Divider />
			<Typography h={2} weight='bold' size='headline'>
				Routing
			</Typography>
			Routing been taken care of as
			<Link href='/test'>
				<a> here</a>
			</Link>
			<Divider />
		</IndexWrapper>
	</Layout>
)
