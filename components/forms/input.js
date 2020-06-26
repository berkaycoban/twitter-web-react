import React from 'react'
import cn from 'classnames'

import styles from './input.module.css'

function Input({
  type = 'text',
  name,
  placeholder = 'Twitter',
  children,
  className,
  ...props
}) {
  return (
    <div className={cn(styles.container)}>
      {children && <span className={styles.icon}>{children}</span>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={cn([styles.input, className])}
        autoComplete="off"
        {...props}
      />
    </div>
  )
}

export default Input
