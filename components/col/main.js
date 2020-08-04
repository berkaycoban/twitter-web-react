import React from 'react'
import cn from 'classnames'

import styles from './main.module.css'

import PageTitle from '../page-title'
import IconButton from '../button/icon'

function Main({ pageTitle, icon, children }) {
  return (
    <main className={cn(styles.main)}>
      <PageTitle title={pageTitle} icon={icon} />
      {children}
    </main>
  )
}

export default Main
