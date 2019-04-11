import React from 'react'
import styled from 'styled-components'
import SocialNetworks from '../components/SocialNetworks'
import { Icon } from 'semantic-ui-react'
import Typography from './Typography'

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  background-color: #272d3b;
  color: white;
  position: absolute;
  bottom: 0;
  height: 80px;
  justify-content: space-between;
  padding: 20px;
  z-index: 99999;
  width: 100%;
  > div {
    flex: 1;
  }
  @media (max-width: 660px) {
    display: none;
    flex-direction: column;
    height: 200px;
    > div {
      flex: 1;
    }
  }
`

const CopyrightWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  height: 30px;
  > h5 {
    margin: 0 0 0 5px;
  }
`

const ImgWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`

function Footer(props) {
  return (
    <FooterWrapper>
      <CopyrightWrapper>
        <span>
          <Icon size="small" inverted name="copyright" />
        </span>
        <Typography h={5} weight="thin" size="subheader">
          2019 - Todos los derechos reservados
        </Typography>
      </CopyrightWrapper>
      <ImgWrapper>
        <img
          src="/static/v01-white.svg"
          alt="Dragoons logo"
          width={60}
          height={60}
        />
      </ImgWrapper>
      <div>
        <SocialNetworks />
      </div>
    </FooterWrapper>
  )
}

export default Footer
