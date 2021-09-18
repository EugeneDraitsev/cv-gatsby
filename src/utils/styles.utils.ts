import { Theme } from '@mui/material'

export const getTransition = (theme: Theme, units: string[]) =>
  theme.transitions.create(units, {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  })
