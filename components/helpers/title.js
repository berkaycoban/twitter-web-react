import React from 'react'
import cn from 'classnames'

import TextTitle from '../text/title'
import styles from './title.module.css'

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
