import styled from 'styled-components'
import { getTransition } from '../styles'

export const Link = styled.a`
  color: ${(p) => p.theme.palette.primary.main};
  transition: ${(p) => getTransition(p.theme, ['color'])};
  &:hover {
   color: ${(p) => p.theme.palette.primary.dark}; 
  }
`
