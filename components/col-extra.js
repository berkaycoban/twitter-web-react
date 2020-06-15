import React from 'react'
import cn from 'classnames'

import styles from './col-extra.module.css'

import Search from './forms/search'
import Trending from './extra/trending'
import Follow from './extra/follow'
import Button from './buttons/button'
import TextSmall from './typography/text-small'
import { ArrowBottom } from './icons'

function Extra() {
  return (
    <div className={cn(styles.extra)}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.trending}>
        <Trending />
      </div>
      <div className={styles.follow}>
        <Follow />
      </div>
      <div className={styles.info}>
        <Button>
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
      <div className={styles.copyright}>
        <TextSmall extraSmall>&copy; 2020 Twitter, Inc.</TextSmall>
      </div>
    </div>
  )
}

export default Extra
