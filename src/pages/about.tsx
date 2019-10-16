import React from 'react'
import styled from 'styled-components'

import { HeaderLayout } from '../components/layout/header-layout.component'
import siteConfig from '../../data/siteConfig'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Video = styled.video`
  max-width: 100%;
  margin: 20px 0 0 0;
`
const MainTitle = styled.h1`
  line-height: 1;
  text-align: center;
  font-size: 3rem;
`
const Text = styled.p`
  text-align: center;
`
const Caption = styled.p`
  color: ${(p) => p.theme.palette.text.secondary};
  font-size: 12px;
  text-align: center;
`

export default function NotFoundPage() {
  return (
    <HeaderLayout title="About" heroImg={siteConfig.siteCover}>
      <Wrapper>
        <MainTitle>About</MainTitle>
        <Text>
          The goal of this site is not only to have some CV-web site to share,
          It&apos;s first of all an example of react-based app with fully passed google audit*.
          In future I&apos;m planning to convert it to kind of personal blog, but for now that&apos;s just an CV.
        </Text>
        <Video src="/google_audit.mp4" autoPlay loop muted>
          <track kind="captions" />
        </Video>
        <Caption>
          *Tested in Chrome Canary 79.0.3943.0
        </Caption>
      </Wrapper>
    </HeaderLayout>
  )
}
