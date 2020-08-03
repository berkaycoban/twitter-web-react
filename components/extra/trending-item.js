import React from 'react'

import styles from './trending-item.module.css'

import ListItem from '../helpers/list-item'
import TextBody from '../text/body'
import TextSmall from '../text/small'
import NavigationButton from '../navigation/button'
import { ArrowBottom } from '../icons'

import countFormatter from '../../helpers/count-formatter'

// !: NavigationButton kaldir yerine IconButton olustur.

function TrendingItem({
  trending = 'Trending in Turkey',
  title = '#Berkay',
  tweet = 35000,
  key
}) {
  console.log(key)
  return (
    <ListItem className={styles.trending} key={key}>
      <TextSmall extraSmall>{trending}</TextSmall>
      <TextBody bold>{title}</TextBody>
      {tweet > 0 && <TextSmall>{countFormatter(tweet)} Tweets</TextSmall>}
      <div className={styles.icon}>
        <NavigationButton>
          <ArrowBottom />
        </NavigationButton>
      </div>
    </ListItem>
  )
}

export default TrendingItem
