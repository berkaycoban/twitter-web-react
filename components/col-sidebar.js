import React from 'react'
import cn from 'classnames'

import styles from './col-sidebar.module.css'

import Navigation from './navigation'
import ThemeButton from './buttons/theme-button'
import ProfileBox from './profile-box'
import { Tweet } from './icons'

function Sidebar({ flat, search }) {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} search={search} />

      <div className={styles.tweet}>
        <ThemeButton big full={!flat} flat={flat}>
          {flat ? <Tweet /> : 'Tweet'}
        </ThemeButton>
      </div>

      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  )
}

export default Sidebar
