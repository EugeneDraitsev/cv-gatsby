import React, { useEffect } from 'react'
import styled from '@emotion/styled'

import { ThemeProvider } from '../contexts'
import { GalaxyHeader } from '../components'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    window.location.href = 'https://eugene-draitsev.vercel.app/'
  }, [])
  return (
    <ThemeProvider>
      <PageWrapper>
        <GalaxyHeader />
        {children}
      </PageWrapper>
    </ThemeProvider>
  )
}

export default Layout
