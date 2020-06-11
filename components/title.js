import React from 'react'
import cn from 'classnames'

import TextTitle from './typography/text-title'
import styles from './title.module.css'

function Title({ name = 'Home', children, className }) {
  return (
    <div className={cn([styles.title, className])}>
      <div className={styles.body}>
        <TextTitle>{name}</TextTitle>
      </div>

      {children && <div className={styles.icon}>{children}</div>}
    </div>
  )
}

export default Title
