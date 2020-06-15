import React from 'react'
import cn from 'classnames'

import styles from './col-sidebar.module.css'

import Navigation from './sidebar/navigation'
import ThemeButton from './buttons/theme-button'
import ProfileBox from './sidebar/profile-box'
import { Tweet } from './icons'

// To-do: Scroll olunca asagiya kaymali
function Sidebar({ flat, search }) {
  return (
    <header className={cn(styles.sidebar)}>
      <Navigation flat={flat} search={search} />

      <div className={styles.tweetButton}>
        <ThemeButton big full={!flat} flat={flat}>
          {flat ? <Tweet /> : 'Tweet'}
        </ThemeButton>
      </div>

      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </header>
  )
}

export default Sidebar
