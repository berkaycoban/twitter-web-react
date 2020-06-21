import React from 'react'
import cn from 'classnames'

import styles from './profile-photo.module.css'

function ProfilePhoto({
  src = 'https://pbs.twimg.com/profile_images/1270075367949205507/WlwJibzU_400x400.jpg',
  alt = '',
  size = 47
}) {
  return (
    <div className={cn([styles.profile])} style={{ width: size, height: size }}>
      <img className={cn([styles.img])} src={src} alt={alt} />
    </div>
  )
}

export default ProfilePhoto
