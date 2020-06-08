import React from 'react'

import styles from './button.module.css'

function Button({ children, className, ...props }) {
  return (
    <button type="button" className={(styles.button, className)} {...props}>
      {children}
    </button>
  )
}

export default Button
