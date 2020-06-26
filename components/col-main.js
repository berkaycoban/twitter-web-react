import React from 'react'
import cn from 'classnames'

import styles from './col-main.module.css'

import PageTitle from './main/page-title'
import NavigationButton from './buttons/navigation-button'

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
