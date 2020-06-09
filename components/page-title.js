import React from 'react'
import cn from 'classnames'

import styles from './page-title.module.css'

import TextTitle from './typography/text-title'
import NavigationButton from './buttons/navigation-button'

import { TimelineProp } from './icons'

function PageTitle({ children = 'Home' }) {
  return (
    <div className={cn([styles.title])}>
      <div className={styles.body}>
        <TextTitle>{children}</TextTitle>
      </div>

      <div className={styles.icon}>
        <NavigationButton>
          <TimelineProp />
        </NavigationButton>
      </div>
    </div>
  )
}

export default PageTitle
