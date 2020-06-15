import React from 'react'

import Stack from '../components/helpers/stack'
import ListItem from '../components/helpers/list-item'
import TrendingItem from '../components/extra/trending-item'
import WidgetHeader from '../components/extra/widget-header'
import NavigationButton from '../components/buttons/navigation-button'
import Trending from '../components/extra/trending'

import { Options } from '../components/icons'

export default {
  title: 'Extra'
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

export const TrendingModule = () => (
  <>
    <Trending />
  </>
)
