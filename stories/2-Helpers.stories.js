import React from 'react'

import * as Icons from '../components/icons'
import Stack from '../components/stack'
import Input from '../components/forms/input'
import SearchInput from '../components/forms/search'
import NavigationButton from '../components/navigation/button'
import Title from '../components/title'
import ProfilePhoto from '../components/photo'
import Textarea from '../components/forms/textarea'

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
      <Textarea />
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

export const Photo = () => <ProfilePhoto />
