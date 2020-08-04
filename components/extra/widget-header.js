import React from 'react'

import styles from './widget-header.module.css'

import Title from '../title'

function WidgetHeader({ title, children }) {
  return (
    <Title title={title} className={styles.widgetHeader}>
      {children}
    </Title>
  )
}

export default WidgetHeader
