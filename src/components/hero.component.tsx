import React from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'

import siteConfig from '../../data/siteConfig'

const HeroContainer = styled.div<{ heroImg?: string }>`
  position: relative;
  display: table;
  width: 100%;
  height: 70vh;
  background-image: ${(p) => `url(${p.heroImg || withPrefix(siteConfig.siteCover)})`};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`
const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`
const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
`

interface HeroProps {
  title: string
  heroImg?: string
  className?: string
}

export const Hero = ({ title, className, heroImg }: HeroProps) => (
  <HeroContainer className={className} heroImg={heroImg}>
    <TitleContainer>
      <HeroTitle>{title}</HeroTitle>
    </TitleContainer>
  </HeroContainer>
)
