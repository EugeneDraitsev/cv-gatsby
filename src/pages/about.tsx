import React from 'react'
import styled from 'styled-components'
import { useAsync } from 'react-use'
import { Skeleton } from '@material-ui/lab'

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
  background: #F6F6F6;
`

export default () => {
  const { loading, value } = useAsync(async () => {
    const result = await fetch('/lighthouse-report.data')
    return result.text()
  })

  return (
    <HeaderLayout title="About">
      <Wrapper>
        <MainTitle>About</MainTitle>
        <Text>
          The goal of this site is not only to have some CV-web site to share,
          It&apos;s first of all an example of react-based app with fully passed google audit*.
          In future I&apos;m planning to convert it to kind of personal blog, but for now that&apos;s just an CV.
        </Text>
        <LighthouseContainer>
          {loading && <Skeleton variant="rect" height={284} />}
          {!loading && value && <Iframe srcDoc={value} title="Lighthouse results" />}
        </LighthouseContainer>
        <Caption>
          *Tested in Chrome 78.0.3904.108
        </Caption>
      </Wrapper>
    </HeaderLayout>
  )
}
