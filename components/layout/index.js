import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

import Sidebar from '../col/sidebar'
import Main from '../col/main'
import Extra from '../col/extra'

import mediaSize from '../../constants/custom-media-size'
import useWindowSize from '../../hooks/useWindowSize'

function Layout({ pageTitle, icon, children }) {
  const size = useWindowSize()
  const showExtra = size.width > mediaSize.TABLET_SIZE

  return (
    <div className={cn(styles.layout)}>
      <Sidebar
        flat={size.width < mediaSize.DESKTOP_SIZE}
        search={size.width < mediaSize.TABLET_SIZE}
      ></Sidebar>

      <Main pageTitle={pageTitle} icon={icon}>
        {children}
      </Main>

      {showExtra && <Extra> asdasdasd </Extra>}
    </div>
  )
}

export default Layout
