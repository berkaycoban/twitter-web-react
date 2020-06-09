import React from 'react'

import styles from './tweet-buttons.module.css'

import TweetButton from './buttons/tweet-button'
import Stack from './stack'
import { Reply, Retweet, Like, Share } from './icons'

import { tweetButtonColor } from '../constants/'

function TweetButtons() {
  return (
    <div className={styles.buttons}>
      <TweetButton count={35}>
        <Reply />
      </TweetButton>
      <TweetButton
        color={tweetButtonColor.RETWEET}
        colorBg={tweetButtonColor.RETWEETBG}
      >
        <Retweet />
      </TweetButton>
      <TweetButton
        count={1907}
        color={tweetButtonColor.LIKE}
        colorBg={tweetButtonColor.LIKEBG}
      >
        <Like />
      </TweetButton>
      <TweetButton>
        <Share />
      </TweetButton>
    </div>
  )
}

export default TweetButtons
