import React from 'react'
import cn from 'classnames'

import styles from './trending.module.css'

import WidgetHeader from './widget-header'
import NavigationButton from '../buttons/navigation-button'
import { Options } from '../icons'
import TrendingItem from './trending-item'

import WidgetFooter from './widget-footer'

function Trending({ className }) {
  return (
    <>
      <div className={cn([styles.container, className])}>
        <WidgetHeader title="Trends for you">
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
