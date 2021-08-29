import React, { memo, useMemo, PropsWithChildren } from 'react'
import { ThemeProvider as StyledProvider } from '@emotion/react'
import { Helmet } from 'react-helmet'
import {
  createTheme,
  Theme as MaterialTheme,
  ThemeProvider as MuiProvider,
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import GlobalStyles from '../styles/global.styles'

const colors = {
  constant: '#d694f9',
  declaration: '#FFC66D',
  string: '#a4c591',
  identifier: '#D1D1D1',
  keyword: '#CC7832',
  number: '#9fd6ff',
  background: '#424242',
} as const

export type Theme = MaterialTheme & {
  colors: typeof colors
}

type ThemeState = {
  theme: Theme
}

const ThemeContext = React.createContext({} as ThemeState)

const ThemeProvider = memo(({ children }: PropsWithChildren<{}>) => {
  const theme = useMemo(() => {
    const basicTheme = createTheme({
      palette: {
        mode: 'dark',
        primary: { main: colors.constant },
        secondary: { main: colors.declaration },
        text: { primary: colors.identifier },
      },
      typography: {
        fontFamily: [
          'Roboto Mono',
          'Lucida Console',
          '"Courier New"',
          'monospace',
        ].join(','),
      },
    })
    return { ...basicTheme, colors }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme }}>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link
          rel="prefetch"
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200..700"
          as="style"
          crossOrigin="true"
        />
      </Helmet>
      <MuiProvider theme={theme}>
        <GlobalStyles />
        <CssBaseline />
        <StyledProvider theme={theme}>{children}</StyledProvider>
      </MuiProvider>
    </ThemeContext.Provider>
  )
})

export { ThemeContext, ThemeProvider }
