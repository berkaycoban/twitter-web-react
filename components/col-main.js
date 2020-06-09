import React from 'react'
import cn from 'classnames'

import styles from './col-main.module.css'

import PageTitle from './page-title'

function Main({ children }) {
  return (
    <div className={cn(styles.main)}>
      <PageTitle></PageTitle>

      {children}
    </div>
  )
}

export default Main
