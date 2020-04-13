import React, { PropsWithChildren } from 'react'
import { Container } from '@material-ui/core'

import { Header } from './header.component'
import { Head } from '../head.component'
import { GalaxyHeader } from '../galaxy.component'

type LayoutProps = {
  title: string
  description?: string
  keywords?: string[]
}

export const HeaderLayout = ({ title, description, keywords, children }: PropsWithChildren<LayoutProps>) => (
  <>
    <Head title={title} description={description} keywords={keywords} />
    <Header />
    <GalaxyHeader />
    <Container>{children}</Container>
  </>
)
