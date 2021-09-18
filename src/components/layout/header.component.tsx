import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Container, Toolbar } from '@mui/material'
import { useWindowScroll, useWindowSize } from 'react-use'

import siteConfig from '../../../data/siteConfig'

const HeaderWrapper = styled.header<{ opacity: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, ${(p) => p.opacity});
  color: #fff;
  z-index: 2;
  transition: 100ms linear background-color;
`

const HeaderLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
`
const HeaderLink = styled(Link)`
  margin-right: 30px;
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
      <Container component="nav">
        <Toolbar>
          <HeaderLinkGroup>
            {headerLinks.map((headerLink) => (
              <HeaderLink to={headerLink.url} key={headerLink.url}>
                {headerLink.label}
              </HeaderLink>
            ))}
          </HeaderLinkGroup>
        </Toolbar>
      </Container>
    </HeaderWrapper>
  )
}
