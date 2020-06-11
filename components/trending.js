import React from 'react'
import cn from 'classnames'

import styles from './trending.module.css'

import WidgetHeader from './trending/widget-header'
import NavigationButton from './buttons/navigation-button'
import { Options } from './icons'
import TrendingItem from './trending/trending-item'

import WidgetFooter from './trending/widget-footer'

function Trending({ className, children }) {
  return (
    <>
      <div className={cn([styles.container, className])}>
        <WidgetHeader name="Trends for you" className={styles.header}>
          <NavigationButton>
            <Options />
          </NavigationButton>
        </WidgetHeader>

        <TrendingItem title="#React" tweet="64937" />
        <TrendingItem title="#Nextjs" tweet="59300" />
        <TrendingItem title="#Web" tweet="3500" />
        <TrendingItem title="#ComputerEng" tweet="35500" />
        <TrendingItem title="#11HaziranDunyaYalnizlarGunu" tweet="4937" />

        <WidgetFooter />
      </div>
    </>
  )
}

export default Trending
