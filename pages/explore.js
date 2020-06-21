import React from 'react'

import mediaSize from '../constants/custom-media-size'
import useWindowSize from '../hooks/useWindowSize'

import Layout from '../components/layout'
import Sidebar from '../components/col-sidebar'

function ExplorePage() {
  const size = useWindowSize()

  return (
    <Layout>
      <Sidebar
        flat={size.width < mediaSize.DESKTOP_SIZE}
        search={size.width < mediaSize.TABLET_SIZE}
      ></Sidebar>
    </Layout>
  )
}

export default ExplorePage
