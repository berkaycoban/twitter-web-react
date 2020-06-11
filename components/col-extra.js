import React from 'react'
import cn from 'classnames'

import styles from './col-extra.module.css'

import Search from './forms/search'
import Trending from './trending'

function Extra() {
  return (
    <div className={cn(styles.extra)}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.trending}>
        <Trending />
      </div>
    </div>
  )
}

export default Extra
