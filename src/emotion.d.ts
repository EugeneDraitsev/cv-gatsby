import '@emotion/react'
import { Theme as AppTheme } from './contexts'

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
