import React from 'react'
import cn from 'classnames'

import styles from './extra.module.css'

import Search from '../forms/search'
import Trending from '../extra/trending'
import Follow from '../extra/follow'
import TextSmall from '../text/small'
import Info from '../extra/info'

// To-do: Warning: Expected server HTML to contain a matching <div> in <div>
function Extra() {
  return (
    <div className={cn(styles.extra)}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.trending}>
        <Trending />
      </div>
      <div className={styles.follow}>
        <Follow />
      </div>
      <Info />
      <div className={styles.copyright}>
        <TextSmall extraSmall>&copy; 2020 Twitter, Inc.</TextSmall>
      </div>
    </div>
  )
}

export default Extra
