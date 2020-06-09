import React from 'react'

import styles from './tweet-buttons.module.css'

import Button from './buttons/button'
import { Media, Gif, Question, Emoji, Schedule } from './icons'
import { mediaSize } from '../constants'

import useWindowSize from '../hooks/useWindowSize'

function TweetButtons() {
  const size = useWindowSize()
  const hidden = size.width < mediaSize.UNNAMED_SIZE

  return (
    <div className={styles.buttons}>
      <Button>
        <Media />
      </Button>
      <Button>
        <Gif />
      </Button>

      {!hidden && (
        <Button>
          <Question />
        </Button>
      )}

      <Button>
        <Emoji />
      </Button>

      {!hidden && (
        <Button>
          <Schedule />
        </Button>
      )}
    </div>
  )
}

export default TweetButtons
