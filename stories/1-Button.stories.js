import React from 'react'

import Button from '../components/buttons/button'
import NavigationButton from '../components/buttons/navigation-button'
import TextTitle from '../components/typography/text-title'

import { Home } from '../components/icons'

export default {
  title: 'Button'
}

export const Normal = () => <Button>Save</Button>

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavigationButton>
)
