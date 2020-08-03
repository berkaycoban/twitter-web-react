import React from 'react'

import styles from './tweet-editor-buttons.module.css'

import Button from '../button'
import { Media, Gif, Question, Emoji, Schedule } from '../icons'
import mediaSize from '../../constants/custom-media-size'

import useWindowSize from '../../hooks/useWindowSize'

function TweetEditorButtons() {
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

      <Button>
        <Emoji />
      </Button>

      {!hidden && (
        <>
          <Button>
            <Question />
          </Button>
          <Button>
            <Schedule />
          </Button>
        </>
      )}
    </div>
  )
}

export default TweetEditorButtons
