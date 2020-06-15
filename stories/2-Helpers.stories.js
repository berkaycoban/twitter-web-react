import React from 'react'

import * as Icons from '../components/icons'
import Stack from '../components/helpers/stack'
import Input from '../components/forms/input'
import SearchInput from '../components/forms/search'
import ListItem from '../components/helpers/list-item'
import TrendingItem from '../components/extra/trending-item'
import NavigationButton from '../components/buttons/navigation-button'
import Title from '../components/helpers/title'

export default {
  title: 'Helpers'
}

export const Icon = () => (
  <div className="icons">
    <Icons.ArrowBottom />
    <Icons.Bookmark />
    <Icons.BookmarkFill />
    <Icons.Emoji />
    <Icons.Explore />
    <Icons.ExplorerFill />
    <Icons.Gif />
    <Icons.Home />
    <Icons.HomeFill />
    <Icons.Like />
    <Icons.Lists />
    <Icons.ListsFill />
    <Icons.Media />
    <Icons.Messages />
    <Icons.MessagesFill />
    <Icons.More />
    <Icons.Notification />
    <Icons.NotificationFill />
    <Icons.Options />
    <Icons.Profile />
    <Icons.ProfileFill />
    <Icons.Question />
    <Icons.Reply />
    <Icons.Retweet />
    <Icons.Schedule />
    <Icons.Search />
    <Icons.Share />
    <Icons.TimelineProp />
    <Icons.Tweet />
    <Icons.Twitter />
  </div>
)

export const FormElements = () => (
  <>
    <Stack>
      <Input />
      <SearchInput />
    </Stack>
  </>
)

export const List = () => (
  <>
    <Stack column>
      <ListItem></ListItem>
      <TrendingItem />
    </Stack>
  </>
)

export const Titlee = () => (
  <>
    <Stack column>
      <Title></Title>
      <Title>
        <NavigationButton>
          <Icons.TimelineProp />
        </NavigationButton>
      </Title>
    </Stack>
  </>
)
