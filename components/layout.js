import React from 'react'
import cn from 'classnames'

import mediaSize from '../constants/custom-media-size'
import useWindowSize from '../hooks/useWindowSize'

import styles from './layout.module.css'

import Sidebar from './col-sidebar'
import Main from './col-main'
import Extra from './col-extra'

function Layout({ pageTitle, titleIcon, children }) {
  const size = useWindowSize()

  return (
    <div className={cn(styles.layout)}>
      <Sidebar
        flat={size.width < mediaSize.DESKTOP_SIZE}
        search={size.width < mediaSize.TABLET_SIZE}
      ></Sidebar>

      <Main pageTitle={pageTitle} titleIcon={titleIcon}>
        {children}
      </Main>

      {size.width > mediaSize.TABLET_SIZE && <Extra>extra</Extra>}
    </div>
  )
}

export default Layout
