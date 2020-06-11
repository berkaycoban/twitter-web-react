import React from 'react'
import cn from 'classnames'

import styles from './list-item.module.css'

function ListItem({ children, className, border = true }) {
  return (
    <div className={cn([styles.listItem, border && styles.border])}>
      <div className={styles.listItemHover}></div>
      <div className={cn(className)}>{children}</div>
    </div>
  )
}

export default ListItem
