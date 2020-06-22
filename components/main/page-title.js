import React from 'react'

import styles from './page-title.module.css'

import Title from '../helpers/title'

function PageTitle({ title, children }) {
  return (
    <Title title={title} className={styles.pageTitle}>
      {children}
    </Title>
  )
}

export default PageTitle
