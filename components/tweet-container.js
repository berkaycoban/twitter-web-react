import React from 'react'
import cn from 'classnames'

import styles from './tweet-container.module.css'

import ProfilePhoto from './images/profile-photo'
import TextBody from './typography/text-body'
import NavigationButton from './buttons/navigation-button'
import TweetImage from './images/tweet-image'
import TweetButtons from './tweet-buttons'

import { ArrowBottom } from './icons'

function TweetContainer({
  name = 'Berkay Ç.',
  slug = 'berkaycoban35',
  time = 'May 19',
  tweet = 'İzmir’in dağlarında çiçekler açar! 🇹🇷  #9Eylül İzmir’in Kurtuluşu kutlu olsun!',
  image = 'https://pbs.twimg.com/media/EEAYRiuX4AEtTsW?format=jpg&name=small'
}) {
  return (
    <div className={cn([styles.container])}>
      <div className={styles.photo}>
        <ProfilePhoto />
      </div>
      <div className={styles.body}>
        <div className={styles.default}>
          <div className={styles.header}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.slug}>@{slug}</TextBody>
            <span className={styles.dot}></span>
            <TextBody className={styles.time}>{time}</TextBody>
            <div className={styles.icon}>
              <NavigationButton>
                <ArrowBottom />
              </NavigationButton>
            </div>
          </div>
          <div className={styles.tweet}>
            <TextBody>
              {tweet.split('\n').map((i) => {
                return <p> {i} </p>
              })}
            </TextBody>
          </div>
        </div>

        {image && (
          <>
            <div className={styles.image}>
              <TweetImage src={image} />
            </div>
          </>
        )}

        <div className={styles.footer}>
          <TweetButtons />
        </div>
      </div>
    </div>
  )
}

export default TweetContainer
