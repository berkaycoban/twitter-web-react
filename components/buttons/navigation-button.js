import React from 'react'
import cn from 'classnames'

import Button from './button'
import styles from './navigation-button.module.css'

function NavigationButton({
  href,
  notify,
  selected,
  children,
  className,
  ...props
}) {
  return (
    <Button
      href={href}
      className={cn([
        styles.navButton,
        selected && styles.navButtonSelected,
        className
      ])}
      {...props}
    >
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  )
}

export default NavigationButton
