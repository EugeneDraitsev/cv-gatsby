import React, { PropsWithChildren } from 'react'
import { Container, Box } from '@mui/material'

import { Header } from './header.component'
import { Head } from '../head.component'

type LayoutProps = {
  title: string
  description?: string
  keywords?: string[]
}

export const HeaderLayout = ({
  title,
  description,
  keywords,
  children,
}: PropsWithChildren<LayoutProps>) => (
  <Box sx={{ flex: 1 }}>
    <Head title={title} description={description} keywords={keywords} />
    <Header />
    <Container>{children}</Container>
  </Box>
)
