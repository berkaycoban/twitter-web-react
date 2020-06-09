import React from 'react'

import { mediaSize } from '../constants'

import Layout from '../components/layout'
import Sidebar from '../components/col-sidebar'
import Main from '../components/col-main'
import Extra from '../components/col-extra'
import Tweet from '../components/tweet-container'

import useWindowSize from '../hooks/useWindowSize'

function HomePage() {
  const size = useWindowSize()

  return (
    <Layout>
      <Sidebar
        flat={size.width < mediaSize.DESKTOP_SIZE}
        search={size.width < mediaSize.TABLET_SIZE}
      ></Sidebar>

      <Main>
        <Tweet></Tweet>
      </Main>

      {size.width > mediaSize.TABLET_SIZE && <Extra>extra</Extra>}
    </Layout>
  )
}

export default HomePage
