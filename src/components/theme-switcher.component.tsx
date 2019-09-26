import React, { useContext } from 'react'
import styled from 'styled-components'
import { Sun, Moon } from 'react-feather'

import { ThemeContext } from '../contexts'

const Wrapper = styled.div`
  cursor: pointer;
`

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, themeType } = useContext(ThemeContext)

  return (
    <Wrapper onClick={toggleTheme} className={className}>
      {themeType === 'dark' ? <Sun size={28} /> : <Moon size={28} />}
    </Wrapper>
  )
}
