import React from 'react'

import styles from './trending-item.module.css'

import ListItem from '../list-item'
import TextBody from '../typography/text-body'
import TextSmall from '../typography/text-small'
import NavigationButton from '../buttons/navigation-button'
import { ArrowBottom } from '../icons'

import countFormatter from '../../helpers/count-formatter'

function TrendingItem({
  trending = 'Trending in Turkey',
  title = '#Berkay',
  tweet = 35000
}) {
  return (
    <ListItem className={styles.trending}>
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
