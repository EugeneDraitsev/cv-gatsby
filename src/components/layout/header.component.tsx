import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import map from 'lodash/map'

import { ThemeSwitcher } from '../theme-switcher.component'
import siteConfig from '../../../data/siteConfig'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(p) => p.theme.palette.primary.dark};
  color: #fff;
  z-index: 1;
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
const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 20px 0 0;
`

export const Header = () => {
  const { headerLinks } = siteConfig

  return (
    <HeaderWrapper>
      <HeaderNav>
        <HeaderLinkGroup>
          {map(headerLinks, (headerLink) => (
            <HeaderLink to={headerLink.url} key={headerLink.url}>
              {headerLink.label}
            </HeaderLink>
          ))}
        </HeaderLinkGroup>
        <HeaderIcons>
          <ThemeSwitcher />
        </HeaderIcons>
      </HeaderNav>
    </HeaderWrapper>
  )
}
