import React from 'react'

import * as Icons from '../components/icons'
import ProfilePhoto from '../components/images/profile-photo'
import ProfileBox from '../components/profile-box'
import Stack from '../components/stack'
import Input from '../components/forms/input'
import SearchInput from '../components/forms/search'
import ListItem from '../components/list-item'
import TrendingItem from '../components/trending-item'

export default {
  title: 'Icons'
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

export const Photo = () => <ProfilePhoto />

export const Box = () => <ProfileBox />

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
