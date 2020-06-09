import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import Button from '../components/buttons/button'
import ThemeButton from '../components/buttons/theme-button'
import NavigationButton from '../components/buttons/navigation-button'
import Navigation from '../components/navigation'
import TextTitle from '../components/typography/text-title'
import Stack from '../components/stack'
import TweetButton from '../components/buttons/tweet-button'
import { tweetButtonColor } from '../constants/'

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

export const TweetBtn = () => {
  return (
    <Stack>
      <TweetButton count={35}>
        <Reply />
      </TweetButton>
      <TweetButton
        color={tweetButtonColor.RETWEET}
        colorBg={tweetButtonColor.RETWEETBG}
      >
        <Retweet />
      </TweetButton>
    </Stack>
  )
}

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavigationButton>
)

export const Nav = () => {
  const flat = boolean('Flat', false)
  return <Navigation flat={flat} selectedKey="home" />
}
