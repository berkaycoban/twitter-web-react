import React from 'react'
import cn from 'classnames'

import styles from './text-small.module.css'

function TextSmall({ normal = false, className, children, ...props }) {
  return (
    <span
      className={cn([styles.small, normal && styles.normal, className])}
      {...props}
    >
      {children}
    </span>
  )
}
export default TextSmall
