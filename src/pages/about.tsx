import React, { memo } from 'react'
import styled from '@emotion/styled'
import { useAsync } from 'react-use'
import { Skeleton } from '@material-ui/core'

import { HeaderLayout, Keyword } from '../components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(p) => p.theme.palette.text.primary};
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
const LighthouseContainer = styled.div`
  height: 284px;
`
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: #f6f6f6;
`

const About = memo(() => {
  const { loading, value } = useAsync(async () => {
    const result = await fetch('/lighthouse-report.data')
    return result.text()
  })

  return (
    <HeaderLayout title="About">
      <Wrapper>
        <MainTitle id="paypal">About</MainTitle>
        <Text>
          The goal of this site is not only to have some CV-web site to share,
          It&apos;s first of all an example of react-based app with fully passed
          google audit*. In future I&apos;m planning to convert it to kind of
          personal blog, but for now that&apos;s just an CV.
        </Text>
        <LighthouseContainer>
          {loading && <Skeleton variant="rectangular" height={284} />}
          {!loading && value && (
            <Iframe srcDoc={value} title="Lighthouse results" />
          )}
        </LighthouseContainer>
        <Caption>
          *Tested in Chrome 91.0.4472.164 in <Keyword>incognito mode</Keyword>
        </Caption>
      </Wrapper>
    </HeaderLayout>
  )
})

export default About
