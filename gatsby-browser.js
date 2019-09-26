import React from 'react'
import { ThemeProvider } from './src/contexts/theme.context'

export const onServiceWorkerUpdateReady = () => {
  window.location.reload()
}

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
)
