import React from 'react'
import cn from 'classnames'

import styles from './textarea.module.css'

// To-do: Textarea Auto Height
function Textarea({ className, children, size = 150, ...props }) {
  return (
    <textarea
      className={cn([styles.textarea, className])}
      placeholder={children}
      maxlength={size}
      {...props}
    ></textarea>
  )
}

export default Textarea
