import React from 'react'

import styles from './follow-item.module.css'

import ListItem from '../helpers/list-item'
import ProfilePhoto from '../helpers/profile-photo'
import TextBody from '../typography/text-body'
import TextSmall from '../typography/text-small'
import NavigationButton from '../buttons/navigation-button'
import Button from '../buttons/button'

// To-do: Uzun metin geldiginde ... sinirlamasini ayarla.
function FollowItem({
  photo = 'https://pbs.twimg.com/profile_images/1270075367949205507/WlwJibzU_400x400.jpg',
  name = 'Berkay C.',
  slug = 'berkay'
}) {
  return (
    <ListItem className={styles.follow}>
      <ProfilePhoto src={photo} alt={49} />
      <div className={styles.body}>
        <Button className={styles.nameButton}>
          <TextBody bold className={styles.name}>
            {name}
          </TextBody>
        </Button>
        <TextSmall>@{slug}</TextSmall>
      </div>
      <NavigationButton className={styles.button}>Follow</NavigationButton>
    </ListItem>
  )
}

export default FollowItem
