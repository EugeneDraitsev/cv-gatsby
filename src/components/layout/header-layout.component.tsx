import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'
import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'

import { Header } from './header.component'
import { Head } from '../head.component'
// import { GalaxyHeader } from '../galaxy.component'

type LayoutProps = {
  title: string
  description?: string
  keywords?: string[]
}

const GalaxyContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 500px;
  max-height: 60vh;
  background: black;
  color: white;
  overflow: hidden;
`

const GalaxyHeader = loadable(
  () => pMinDelay(import('../galaxy.component'), 3700),
  {
    fallback: <GalaxyContainer>Loading...</GalaxyContainer>,
  },
)

export const HeaderLayout = ({
  title,
  description,
  keywords,
  children,
}: PropsWithChildren<LayoutProps>) => (
  <>
    <Head title={title} description={description} keywords={keywords} />
    <Header />
    <GalaxyHeader />
    <Container>{children!}</Container>
  </>
)
