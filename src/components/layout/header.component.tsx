import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { map } from 'lodash-es'
import { useWindowScroll, useWindowSize } from 'react-use'

import siteConfig from '../../../data/siteConfig'

const HeaderWrapper = styled.header<{ opacity: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, ${(p) => p.opacity});
  color: #fff;
  z-index: 1;
  transition: 300ms ease-in-out background-color;
`
const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  max-width: 960px;
  margin: 0 auto;
`
const HeaderLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
`
const HeaderLink = styled(Link)`
  padding: 0 20px;
  font-weight: 500;
`

export const Header = () => {
  const { headerLinks } = siteConfig
  const { y } = useWindowScroll()
  const { height } = useWindowSize()
  const fadeHeight = Math.min(500, height * 0.6) - 60
  const opacity = y / fadeHeight

  return (
    <HeaderWrapper opacity={opacity}>
      <HeaderNav>
        <HeaderLinkGroup>
          {map(headerLinks, (headerLink) => (
            <HeaderLink to={headerLink.url} key={headerLink.url}>
              {headerLink.label}
            </HeaderLink>
          ))}
        </HeaderLinkGroup>
      </HeaderNav>
    </HeaderWrapper>
  )
}
