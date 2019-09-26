import React from 'react'
import styled from 'styled-components'

import { Header } from './header.component'
import { Head } from '../head.component'
import { Hero } from '../hero.component'

const Content = styled.main`
  position: relative;
  width: 80%;
  max-width: 960px;
  min-height: 150px;
  background-color: ${(p) => p.theme.palette.background.paper};
  margin: -100px auto 20px auto;
  padding: 50px;
  border-radius: 4px;
  box-shadow: ${(p) => p.theme.shadows[2]};
  overflow: hidden;
  @media (max-width: 800px) {
    width: 90%;
    padding: 25px;
  }
`

interface LayoutProps {
  title: string
  description?: string
  heroImg?: string
  heroTitle?: string
  keywords?: string[]
  children: JSX.Element | JSX.Element []
}

export const HeaderLayout = ({ title, heroImg, heroTitle, description, keywords, children }: LayoutProps) => (
  <>
    <Head title={title} description={description} keywords={keywords} />
    <Header />
    {heroImg && <Hero heroImg={heroImg} title={heroTitle || title} />}
    <Content>{children}</Content>
  </>
)
