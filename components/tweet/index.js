import React from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import styles from './style.module.css'

import Photo from '../photo'
import IconButton from '../button/icon'
import TweetImage from '../tweet-image'
import TextSmall from '../text/small'
import { ArrowBottom, Reply, Retweet, Like, Share } from '../icons'

import countFormatter from '../../helpers/count-formatter'

function Tweet({
  photo = 'https://pbs.twimg.com/profile_images/1270075367949205507/WlwJibzU_400x400.jpg',
  name = 'Berkay Ç.',
  slug = 'berkaycoban35',
  datetime,
  text = 'İzmir’in dağlarında çiçekler açar! 🇹🇷  #9Eylül İzmir’in Kurtuluşu kutlu olsun!',
  image = 'https://pbs.twimg.com/media/EEAYRiuX4AEtTsW?format=jpg',
  alt,
  reply_count = 35,
  retweet_count,
  like_count = 1907
}) {
  return (
    <article className={styles.tweet}>
      {/* Avatar */}
      <div className={styles.avatar}>
        <Photo src={photo} />
      </div>

      {/* Body */}
      <div className={styles.body}>
        <header className={styles.header}>
          {/* Tweet Info */}
          <div>
            <TextSmall className={styles.name}>{name}</TextSmall>
            {` `}
            <TextSmall>@{slug}</TextSmall>
            {` `} · {` `}
            <TextSmall>{formatDistanceToNowStrict(datetime)}</TextSmall>
          </div>

          {/* TweetSettings Button */}
          <div className={styles.tweetSettings}>
            <IconButton>
              <ArrowBottom />
            </IconButton>
          </div>
        </header>

        <div className={styles.content}>
          {text}

          {image && <TweetImage src={image} alt={alt} />}
        </div>

        <footer className={styles.footer}>
          {/* Reply */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Reply />
            </IconButton>
            {reply_count && <span>{countFormatter(reply_count)}</span>}
          </div>

          {/* Retweet */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Retweet />
            </IconButton>
            {retweet_count && <span>{countFormatter(retweet_count)}</span>}
          </div>

          {/* Like */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Like />
            </IconButton>
            {like_count && <span>{countFormatter(like_count)}</span>}
          </div>

          {/* Share */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Share />
            </IconButton>
          </div>
        </footer>
      </div>
    </article>
  )
}

export default Tweet
