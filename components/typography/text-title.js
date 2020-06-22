import React from 'react'
import cn from 'classnames'

import styles from './text-title.module.css'

function TextTitle({ bold = true, extra, children }) {
  return (
    <h2
      className={cn([
        styles.title,
        bold && styles.bold,
        extra && styles.extraBold
      ])}
    >
      {children}
    </h2>
  )
}

export default TextTitle
