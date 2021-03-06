import React from 'react'

import cn from 'classnames'

import styles from './sidebar.module.css'

import Navigation from '../navigation/navigation'
import ThemeButton from '../theme-button'
import ProfileBox from '../profile-box'
import { Tweet } from '../icons'

function Sidebar({ flat, search }) {
  return (
    <header className={cn(styles.sidebar)}>
      <Navigation flat={flat} search={search} />

      <div className={styles.tweetButton}>
        <ThemeButton big full={!flat} flat={true}>
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
