import React from 'react'
import cn from 'classnames'

import styles from './main.module.css'

import PageTitle from '../main/page-title'
import NavigationButton from '../navigation/button'

// !: NavigationButton kaldir yerine IconButton olustur.
function Main({ pageTitle, titleIcon, children }) {
  return (
    <main className={cn(styles.main)}>
      <PageTitle title={pageTitle}>
        {titleIcon && <NavigationButton>{titleIcon}</NavigationButton>}
      </PageTitle>
      {children}
    </main>
  )
}

export default Main
