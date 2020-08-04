import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import ProfileBox from '../components/profile-box'
import Navigation from '../components/navigation/navigation'

export default {
  title: 'Sidebar',
  decorators: [withKnobs]
}

export const Profile = () => <ProfileBox />

export const Nav = () => {
  const flat = boolean('Flat', false)

  return <Navigation flat={flat} />
}
