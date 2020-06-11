import React from 'react'

import Stack from '../components/stack'
import ListItem from '../components/list-item'
import TrendingItem from '../components/trending/trending-item'
import WidgetHeader from '../components/trending/widget-header'
import NavigationButton from '../components/buttons/navigation-button'
import Trending from '../components/trending'

import { Options } from '../components/icons'

export default {
  title: 'Trending'
}

export const List = () => (
  <>
    <Stack column>
      <ListItem></ListItem>
      <TrendingItem />
    </Stack>
  </>
)

export const WidgetTitle = () => (
  <>
    <Stack column>
      <WidgetHeader name="Trends for you">
        <NavigationButton>
          <Options />
        </NavigationButton>
      </WidgetHeader>

      <WidgetHeader name="Who to follow"></WidgetHeader>
    </Stack>
  </>
)

export const Trend = () => (
  <>
    <Trending />
  </>
)
