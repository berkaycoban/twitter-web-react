import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './button.module.css'

function Button({ full = false, children, className, href = '/', ...props }) {
  return (
    <Link href={href}>
      <a
        className={cn([styles.button, full && styles.fullWidth, className])}
        {...props}
      >
        {children}
      </a>
    </Link>
  )
}

export default Button
