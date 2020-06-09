import React from 'react'

import styles from './tweet-buttons.module.css'

import Button from './buttons/button'
import { Media, Gif, Question, Emoji, Schedule } from './icons'
import useWindowSize from '../hooks/useWindowSize'
import { mediaSize } from '../constants'

function TweetButtons() {
  const size = useWindowSize()

  return (
    <div className={styles.buttons}>
      <Button>
        <Media />
      </Button>
      <Button>
        <Gif />
      </Button>

      {size.width > mediaSize.UNNAMED_SIZE && (
        <Button>
          <Question />
        </Button>
      )}

      <Button>
        <Emoji />
      </Button>

      {size.width > mediaSize.UNNAMED_SIZE && (
        <Button>
          <Schedule />
        </Button>
      )}
    </div>
  )
}

export default TweetButtons
