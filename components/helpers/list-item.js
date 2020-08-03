import React from 'react'
import cn from 'classnames'

import styles from './list-item.module.css'

// TODO: Hover olunca bg-color kimsini duzlet
function ListItem({ children, className, border = true, key }) {
  return (
    <div className={cn([styles.listItem, border && styles.border])} key={key}>
      <div className={styles.listItemHover}></div>
      <div className={cn(className)}>{children}</div>
    </div>
  )
}

export default ListItem
