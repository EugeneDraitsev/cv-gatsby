import React, { memo } from 'react'
import { Global, css } from '@emotion/react'

const GlobalStyles = memo(() => (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        padding: 0;
      }

      html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      body {
        font-size: 0.875rem !important;
        font-weight: 400 !important;
        line-height: 1.43 !important;
        letter-spacing: 0.01em !important;
        font-family: Roboto Mono, Lucida Console, 'Courier New', monospace !important;
        background-color: rgb(43, 43, 43) !important;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
))

export default GlobalStyles
