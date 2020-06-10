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
  photo = 'https://pbs.twimg.com/profile_images/1270075367949205507/WlwJibzU_400x400.jpg',
  name = 'Berkay Ç.',
  slug = 'berkaycoban35',
  time = 'Sep 9',
  tweet = 'İzmir’in dağlarında çiçekler açar! 🇹🇷  #9Eylül İzmir’in Kurtuluşu kutlu olsun!',
  image = 'https://pbs.twimg.com/media/EEAYRiuX4AEtTsW?format=jpg',
  reply = 35,
  retweet = 0,
  like = 1907
}) {
  return (
    <div className={cn([styles.container])}>
      <div className={styles.photo}>
        <ProfilePhoto src={photo} />
      </div>
      <div className={styles.body}>
        <div className={styles.default}>
          <div className={styles.header}>
            <TextBody bold className={styles.name}>
              {name}
            </TextBody>
            <TextBody>@{slug}</TextBody>
            <span className={styles.dot}></span>
            <TextBody>{time}</TextBody>
            <div className={styles.icon}>
              <NavigationButton>
                <ArrowBottom />
              </NavigationButton>
            </div>
          </div>
          <div className={styles.tweet}>
            <TextBody>{tweet}</TextBody>
          </div>
        </div>

        {image && <TweetImage src={image} />}

        <div className={styles.footer}>
          <TweetButtons reply={reply} retweet={retweet} like={like} />
        </div>
      </div>
    </div>
  )
}

export default TweetContainer
