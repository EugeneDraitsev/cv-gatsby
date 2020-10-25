import React from 'react'
import styled from 'styled-components'
import { useAsync } from 'react-use'
import { Skeleton } from '@material-ui/lab'
import { Link } from '@material-ui/core'

import { HeaderLayout } from '../components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export default () => {
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
          {loading && <Skeleton variant="rect" height={284} />}
          {!loading && value && (
            <Iframe srcDoc={value} title="Lighthouse results" />
          )}
        </LighthouseContainer>
        <Caption>*Tested in Chrome 86.0.4240.111 in incognito mode</Caption>
        <Caption>
          Also you can verify this result using following{' '}
          <Link
            target="_blank"
            color="secondary"
            href="https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Feugene-draitsev.netlify.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext"
          >
            link
          </Link>
        </Caption>
      </Wrapper>
    </HeaderLayout>
  )
}
