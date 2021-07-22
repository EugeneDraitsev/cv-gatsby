import React, { memo } from 'react'
import { Global, css } from '@emotion/react'

const GlobalStyles = memo(() => (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        padding: 0;
        scrollbar-color: rgb(107, 107, 107) rgb(43, 43, 43);
      }

      body::-webkit-scrollbar-thumb,
      body ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: rgb(107, 107, 107);
        min-height: 24px;
        border: 3px solid rgb(43, 43, 43);
      }

      body::-webkit-scrollbar-corner,
      body ::-webkit-scrollbar-corner {
        background-color: rgb(43, 43, 43);
      }

      body::-webkit-scrollbar,
      body ::-webkit-scrollbar {
        background-color: rgb(43, 43, 43);
      }

      body::backdrop {
        background-color: rgb(18, 18, 18);
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
        line-height: 1.43 !important;
        letter-spacing: 0.01em !important;
        font-family: Roboto Mono, Lucida Console, 'Courier New', monospace !important;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `}
  />
))

export default GlobalStyles
