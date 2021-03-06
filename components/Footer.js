import React from 'react'
import styled from 'styled-components'
import SocialNetworks from '../components/SocialNetworks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #131929;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  height: 180px;
  z-index: 99999;
  width: 100%;
  > div {
    @media (max-width: 1000px) {
      flex: 1;
    }
  }
  @media (min-width: 500px) {
    flex-direction: row;
    align-items: center;
    height: auto;
  }
`

const CopyrightWrapper = styled.div`
  text-align: center;
  order: 3;
  > h5 {
    margin: 0 0 0 5px;
  }
  @media (min-width: 500px) {
    width: 300px;
    text-align: left;
    order: 1;
  }
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  order: 1;
  margin: 0 0 15px 0;
  @media (min-width: 500px) {
    order: 2;
  }
`

const XFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: white;
  margin: 0 5px 0 0;
`

const SocialNetworksWrapper = styled.div`
  display: flex;
  justify-content: center;
  order: 2;
  margin: 20px 0;
  @media (min-width: 500px) {
    width: 300px;
    order: 3;
    justify-content: flex-end;
  }
`

function Footer(props) {
  return (
    <FooterWrapper>
      <CopyrightWrapper>
        <XFontAwesomeIcon icon={['fa', 'copyright']} fixedWidth size="1x" />
        2020 - Todos los derechos reservados
      </CopyrightWrapper>
      <ImgWrapper>
        <img
          src="/static/v01-white.svg"
          alt="Dragoons-logo"
          width={50}
          height={50}
        />
      </ImgWrapper>
      <SocialNetworksWrapper>
        <SocialNetworks />
      </SocialNetworksWrapper>
    </FooterWrapper>
  )
}

export default Footer
