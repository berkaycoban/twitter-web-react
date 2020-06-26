import React from 'react'
import cn from 'classnames'

import styles from './trending.module.css'

import WidgetHeader from './widget-header'
import NavigationButton from '../buttons/navigation-button'
import { Options } from '../icons'
import TrendingItem from './trending-item'
import WidgetFooter from './widget-footer'

import trendingItems from '../../constants/trending'

function Trending({ className }) {
  return (
    <>
      <div className={cn([styles.container, className])}>
        <WidgetHeader title="Trends for you" key="trends-for-you">
          <NavigationButton>
            <Options />
          </NavigationButton>
        </WidgetHeader>

        {trendingItems.map((item) => (
          <TrendingItem
            title={item.title}
            tweet={item.tweet}
            key={item.title.toLowerCase()}
          />
        ))}

        <WidgetFooter key="footer" />
      </div>
    </>
  )
}

export default Trending
