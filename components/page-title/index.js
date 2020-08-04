import React from 'react'

import styles from './style.module.css'

import Title from '../title'
import IconButton from '../button/icon'

function PageTitle({ title, icon }) {
  return (
    <Title title={title} className={styles.pageTitle}>
      {icon && <IconButton>{icon}</IconButton>}
    </Title>
  )
}

export default PageTitle
