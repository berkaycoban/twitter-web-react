import React from 'react'
import cn from 'classnames'

import styles from './small.module.css'

function Small({ extraSmall, className, children, ...props }) {
  return (
    <span
      className={cn([styles.small, extraSmall && styles.extraSmall, className])}
      {...props}
    >
      {children}
    </span>
  )
}
export default Small
