import React from 'react'

import styles from './widget-header.module.css'

import Title from '../title'

function WidgetHeader({ name = 'Home', children }) {
  return (
    <Title name={name} className={styles.widgetHeader}>
      {children}
    </Title>
  )
}

export default WidgetHeader
