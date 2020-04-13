import React from 'react'
import styled from 'styled-components'

import { HeaderLayout } from '../components'

const MainTitle = styled.h1`
  line-height: 1.5;
  text-align: center;
  font-size: 3rem;
`
const ImageWrapper = styled.div`
  width: 150px;
  margin: 0 auto;
`
const Text = styled.p`
  text-align: center;
`

export default function NotFoundPage() {
  return (
    <HeaderLayout title="Page Not Found">
      <MainTitle>404 Page Not Found</MainTitle>
      <ImageWrapper>
        <img src="/images/ufo-and-cow.svg" alt="ufo and cow" />
      </ImageWrapper>
      <Text>
        Looks like you&apos;ve followed a broken link or entered a URL that
        doesn&apos;t exist on this site.
      </Text>
    </HeaderLayout>
  )
}
