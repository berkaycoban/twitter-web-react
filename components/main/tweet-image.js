import React from 'react'
import cn from 'classnames'

import styles from './tweet-image.module.css'

function TweetImage({
  src = 'https://pbs.twimg.com/media/EaAPZ9kXQAAcs6n?format=png&name=small',
  alt = ''
}) {
  return (
    <div className={cn([styles.tweetImage])}>
      <img className={cn([styles.img])} src={src} alt={alt} />
    </div>
  )
}

export default TweetImage
