import React from 'react'
import cn from 'classnames'

import Button from './button'

import styles from './theme-button.module.css'

function ThemeButton({
  className,
  children,
  big = false,
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={cn(
        styles.button,
        big && styles.bigButton,
        disabled && styles.disabled,
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}

export default ThemeButton
