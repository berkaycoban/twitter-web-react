import React from 'react'
import cn from 'classnames'

import styles from './tweet-editor.module.css'

import ProfilePhoto from './images/profile-photo'
import ThemeButton from './buttons/theme-button'
import TweetTextarea from './forms/tweet-textarea'
import TweetButtons from './tweet-buttons'

function TweetEditor() {
  return (
    <div className={cn([styles.editor])}>
      <div className={styles.photo}>
        <ProfilePhoto />
      </div>
      <div className={styles.body}>
        <div className={styles.textarea}>
          <TweetTextarea />
        </div>
        <div className={styles.toolbar}>
          <TweetButtons />

          {/* To-do: Textarea deger girildiginde disabled kaldir */}
          <ThemeButton disabled>Tweet</ThemeButton>
        </div>
      </div>
    </div>
  )
}

export default TweetEditor
