import React from 'react'

import styles from './tweet-textarea.module.css'

import Textarea from './textarea'

function TweetTextarea({ children = "What's happening?", ...props }) {
  return (
    <Textarea className={styles.tweet} {...props}>
      {children}
    </Textarea>
  )
}

export default TweetTextarea
