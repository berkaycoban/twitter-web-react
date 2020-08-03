import React from 'react'

import styles from './follow-item.module.css'

import ListItem from '../helpers/list-item'
import ProfilePhoto from '../photo'
import TextBody from '../text/body'
import TextSmall from '../text/small'
import NavigationButton from '../navigation/button'
import Button from '../button'

// TODO: Uzun metin geldiginde ... sinirlamasini ayarla.
// !: NavigationButton kaldir yerine IconButton olustur.

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
