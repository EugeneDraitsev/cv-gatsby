import React from 'react'
import { ThemeProvider } from '../contexts'

const layout = ({ children }: any) => <ThemeProvider>{children}</ThemeProvider>

export default layout
