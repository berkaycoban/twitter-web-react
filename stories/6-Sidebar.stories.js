import React from 'react'

import ProfileBox from '../components/sidebar/profile-box'
import ProfilePhoto from '../components/sidebar/profile-photo'
import Navigation from '../components/sidebar/navigation'

export default {
  title: 'Sidebar'
}

export const Photo = () => <ProfilePhoto />

export const Profile = () => <ProfileBox />

export const Nav = () => <Navigation />
