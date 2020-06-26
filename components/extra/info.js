import React from 'react'

import styles from './info.module.css'

import Button from '../buttons/button'
import TextSmall from '../typography/text-small'
import { ArrowBottom } from '../icons'

function Info() {
  return (
    <>
      <div className={styles.info}>
        <Button key="terms">
          <TextSmall extraSmall>Terms</TextSmall>
        </Button>
        <Button>
          <TextSmall extraSmall>Privacy policy</TextSmall>
        </Button>
        <Button>
          <TextSmall extraSmall>Cookies</TextSmall>
        </Button>
        <Button>
          <TextSmall extraSmall>Ads info</TextSmall>
        </Button>
        <Button>
          <TextSmall extraSmall>
            More <ArrowBottom />
          </TextSmall>
        </Button>
      </div>
    </>
  )
}

export default Info
