import React from 'react'
import cn from 'classnames'

import Button from './button'

import styles from './theme-button.module.css'

// To-do: Tweet Icon sayfa yenilendiginde patliyo

function ThemeButton({
  className,
  children,
  big = false,
  flat = false,
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={cn(
        styles.button,
        big && styles.bigButton,
        flat && styles.tweetIcon,
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
