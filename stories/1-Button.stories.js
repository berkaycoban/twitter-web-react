import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import Button from '../components/button'
import ThemeButton from '../components/theme-button'
import NavigationButton from '../components/navigation/button'
import TextTitle from '../components/text/title'
import Stack from '../components/stack'
import { Home, Tweet, Reply, Retweet } from '../components/icons'

export default {
  title: 'Button',
  decorators: [withKnobs]
}

export const Normal = () => <Button>Save</Button>

export const Theme = () => {
  const flat = boolean('Flat Tweet Icon', true)
  const disabled = boolean('Disabled', false)

  return (
    <Stack column>
      <ThemeButton disabled={disabled}>Save</ThemeButton>

      <ThemeButton full>Save</ThemeButton>
      <ThemeButton full big>
        Save Big Button
      </ThemeButton>

      <ThemeButton big flat={flat}>
        <Tweet />
      </ThemeButton>
    </Stack>
  )
}

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavigationButton>
)
