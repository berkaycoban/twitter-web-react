import React from 'react'

import Stack from '../components/stack'
import ListItem from '../components/helpers/list-item'
import TrendingItem from '../components/extra/trending-item'
import WidgetHeader from '../components/extra/widget-header'
import NavigationButton from '../components/buttons/navigation-button'
import Trending from '../components/extra/trending'
import FollowItem from '../components/extra/follow-item'
import Follow from '../components/extra/follow'

import { Options } from '../components/icons'

export default {
  title: 'Extra'
}

export const Item = () => (
  <>
    <Stack column>
      <ListItem></ListItem>
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

export const TrendingItems = () => (
  <>
    <Stack column>
      <TrendingItem />
      <TrendingItem title="#React" tweet="64937" />
    </Stack>
  </>
)

export const TrendingModule = () => (
  <>
    <Trending />
  </>
)

export const FollowItems = () => (
  <>
    <Stack column>
      <FollowItem></FollowItem>
      <FollowItem
        photo="https://pbs.twimg.com/profile_images/988162982835179520/YWs_IwJ3_400x400.jpg"
        name="Rocket Lab"
        slug="RocketLab"
      />
    </Stack>
  </>
)

export const FollowModule = () => (
  <>
    <Follow />
  </>
)
