import React from 'react'

import styles from './tweet-buttons.module.css'

import Button from './buttons/button'
import { Media, Gif, Question, Emoji, Schedule } from './icons'

function TweetButtons() {
  return (
    <div className={styles.buttons}>
      <Button>
        <Media />
      </Button>
      <Button>
        <Gif />
      </Button>
      <Button>
        <Question />
      </Button>
      <Button>
        <Emoji />
      </Button>
      <Button>
        <Schedule />
      </Button>
    </div>
  )
}

export default TweetButtons
