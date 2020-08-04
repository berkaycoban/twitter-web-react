import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

import TextTitle from '../text/title'

function Title({ title = 'Home', children, className }) {
  return (
    <div className={cn([styles.title, className])}>
      <div className={styles.body}>
        <TextTitle extra>{title}</TextTitle>
      </div>

      {children && <div className={styles.icon}>{children}</div>}
    </div>
  )
}

export default Title
