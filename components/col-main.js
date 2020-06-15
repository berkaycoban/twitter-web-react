import React from 'react'
import cn from 'classnames'

import styles from './col-main.module.css'

import PageTitle from './main/page-title'
import NavigationButton from './buttons/navigation-button'
import TweetEditor from './main/tweet-editor'

import { TimelineProp } from './icons'

function Main({ children }) {
  return (
    <div className={cn(styles.main)}>
      <PageTitle>
        <NavigationButton>
          <TimelineProp />
        </NavigationButton>
      </PageTitle>
      <TweetEditor />

      {children}
    </div>
  )
}

export default Main
