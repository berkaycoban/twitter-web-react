import React from 'react'
import cn from 'classnames'

import styles from './col-main.module.css'

import PageTitle from './page-title'
import TweetEditor from './tweet-editor'

function Main({ children }) {
  return (
    <div className={cn(styles.main)}>
      <PageTitle></PageTitle>
      <TweetEditor />

      {children}
    </div>
  )
}

export default Main
