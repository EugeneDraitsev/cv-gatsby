import 'styled-components'
import { Theme } from './contexts'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
