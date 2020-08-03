import React from 'react'
import cn from 'classnames'

import styles from './body.module.css'

function Body({ bold = false, className, children, ...props }) {
  return (
    <span className={cn([bold && styles.bold, className])} {...props}>
      {children}
    </span>
  )
}
export default Body
