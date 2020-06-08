import React from 'react'

import Button from '../components/buttons/button'
import ThemeButton from '../components/buttons/theme-button'
import NavigationButton from '../components/buttons/navigation-button'
import Navigation from '../components/navigation'
import TextTitle from '../components/typography/text-title'
import Stack from '../components/stack'

import { Home } from '../components/icons'

export default {
  title: 'Button'
}

export const Normal = () => <Button>Save</Button>

export const Theme = () => (
  <Stack column>
    <ThemeButton>Save</ThemeButton>
    <ThemeButton full>Save</ThemeButton>
    <ThemeButton full big>
      Save Big Button
    </ThemeButton>
  </Stack>
)
export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavigationButton>
)

export const Nav = () => {
  return <Navigation selectedKey="home" />
}
