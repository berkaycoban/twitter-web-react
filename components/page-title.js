import React from 'react'

import styles from './page-title.module.css'

import Title from './title'

function PageTitle({ name = 'Home', children }) {
  return (
    <Title name={name} className={styles.pageTitle}>
      {children}
    </Title>
  )
}

export default PageTitle
