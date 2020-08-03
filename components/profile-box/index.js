import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

import ProfilePhoto from '../photo'
import { ArrowBottom } from '../icons'
import Button from '../button'
import TextBody from '../text/body'

function ProfileBox({
  flat = false,
  name = 'Berkay Ç.',
  slug = 'berkaycoban35'
}) {
  return (
    <Button className={cn([styles.box])}>
      <ProfilePhoto size={39} />
      {!flat && (
        <>
          <div className={styles.body}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.slug}>@{slug}</TextBody>
          </div>
          <ArrowBottom className={styles.icon} />
        </>
      )}
    </Button>
  )
}

export default ProfileBox
