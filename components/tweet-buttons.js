import React from 'react'

import styles from './tweet-buttons.module.css'

import tweetButtonColor from '../constants/tweet-button-color'

import TweetButton from './buttons/tweet-button'
import { Reply, Retweet, Like, Share } from './icons'

function TweetButtons({ reply = 35, retweet = 10, like = 90 }) {
  return (
    <div className={styles.buttons}>
      <TweetButton count={reply}>
        <Reply />
      </TweetButton>
      <TweetButton
        count={retweet}
        color={tweetButtonColor.RETWEET}
        colorBg={tweetButtonColor.RETWEETBG}
      >
        <Retweet />
      </TweetButton>
      <TweetButton
        count={like}
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
