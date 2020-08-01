import React from 'react'
import * as Icon from '../components/icons'

export const MENU = {
  twitter: {
    path: '/',
    icon: <Icon.Twitter style={{ fontSize: 30 }} />,
    iconSelected: (
      <Icon.Twitter style={{ fontSize: 30, color: 'var(--c-text-color)' }} />
    ),
    title: '',
    notify: 0
  },
  home: {
    path: '/',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeFill />,
    title: 'Home',
    notify: 0
  },
  explore: {
    path: '/explore',
    icon: <Icon.Explore />,
    iconSelected: <Icon.ExplorerFill />,
    title: 'Explore',
    notify: 0
  },
  notification: {
    path: '/notifications',
    icon: <Icon.Notification />,
    iconSelected: <Icon.NotificationFill />,
    title: 'Notifications',
    notify: 17
  },
  messages: {
    path: '/messages',
    icon: <Icon.Messages />,
    iconSelected: <Icon.MessagesFill />,
    title: 'Messages',
    notify: 0
  },
  bookmark: {
    path: '/bookmarks',
    icon: <Icon.Bookmark />,
    iconSelected: <Icon.BookmarkFill />,
    title: 'Bookmarks',
    notify: 0
  },
  lists: {
    // TODO: username/lists olacak
    path: 'lists',
    icon: <Icon.Lists />,
    iconSelected: <Icon.ListsFill />,
    title: 'Lists',
    notify: 0
  },
  profile: {
    // TODO: username gelecek
    path: '/profile',
    icon: <Icon.Profile />,
    iconSelected: <Icon.ProfileFill />,
    title: 'Profile',
    notify: 0
  },
  more: {
    path: '/more',
    icon: <Icon.More />,
    iconSelected: <Icon.More />,
    title: 'More',
    notify: 0
  }
}
