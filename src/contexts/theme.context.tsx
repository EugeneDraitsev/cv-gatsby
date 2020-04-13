import React, { memo, useMemo, PropsWithChildren } from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'
import createMuiTheme, { Theme as MaterialTheme } from '@material-ui/core/styles/createMuiTheme'
import { Helmet } from 'react-helmet'
import { ThemeProvider as MuiProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

import GlobalStyles from '../styles/global.styles'

type Colors = {
  constant: string,
  declaration: string,
  string: string,
  identifier: string,
  keyword: string,
  number: string,
  background: string,
}

export type Theme = MaterialTheme & {
  colors: Colors
}

type ThemeState = {
  theme: Theme
}

const ThemeContext = React.createContext({} as ThemeState)

const ThemeProvider = memo(({ children }: PropsWithChildren<{}>) => {
  const colors = {
    constant: '#d694f9',
    declaration: '#FFC66D',
    string: '#a4c591',
    identifier: '#D1D1D1',
    keyword: '#CC7832',
    number: '#9fd6ff',
    background: '#424242',
  }
  const theme = useMemo(() => {
    const basicTheme = createMuiTheme({
      palette: {
        type: 'dark',
        primary: { main: colors.constant },
        secondary: { main: colors.declaration },
        text: { primary: colors.identifier },
      },
      typography: {
        fontFamily: ['Roboto Mono', 'Lucida Console', '"Courier New"', 'monospace'].join(','),
      },
    })
    return { ...basicTheme, colors }
  }, [colors])

  return (
    <ThemeContext.Provider value={{ theme }}>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>
      <MuiProvider theme={theme}>
        <GlobalStyles />
        <CssBaseline />
        <StyledProvider theme={theme}>
          {children}
        </StyledProvider>
      </MuiProvider>
    </ThemeContext.Provider>
  )
})

export { ThemeContext, ThemeProvider }
