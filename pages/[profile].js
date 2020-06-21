import React from 'react'

import mediaSize from '../constants/custom-media-size'
import useWindowSize from '../hooks/useWindowSize'

import Layout from '../components/layout'
import Sidebar from '../components/col-sidebar'

function ProfilePage() {
  const size = useWindowSize()

  return (
    <Layout>
      <Sidebar
        flat={size.width < mediaSize.DESKTOP_SIZE}
        search={size.width < mediaSize.TABLET_SIZE}
      ></Sidebar>
      Profile Page
    </Layout>
  )
}

export default ProfilePage
