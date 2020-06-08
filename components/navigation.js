import React from 'react'
import cn from 'classnames'

import styles from './navigation.module.css'

import NavigationButton from './buttons/navigation-button'
import TextTitle from './typography/text-title'
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More,
  HomeFill,
  ExplorerFill,
  NotificationFill,
  MessagesFill,
  BookmarkFill,
  ListsFill,
  ProfileFill
} from './icons'

const MENU = [
  {
    key: 'twitter',
    icon: <Twitter />,
    iconSelected: <Twitter />,
    title: '',
    notify: 0
  },
  {
    key: 'home',
    icon: <Home />,
    iconSelected: <HomeFill />,
    title: 'Home',
    notify: 0
  },
  {
    key: 'explore',
    icon: <Explore />,
    iconSelected: <ExplorerFill />,
    title: 'Explore',
    notify: 0
  },
  {
    key: 'notification',
    icon: <Notification />,
    iconSelected: <NotificationFill />,
    title: 'Notification',
    notify: 17
  },
  {
    key: 'messages',
    icon: <Messages />,
    iconSelected: <MessagesFill />,
    title: 'Messages',
    notify: 0
  },
  {
    key: 'bookmark',
    icon: <Bookmark />,
    iconSelected: <BookmarkFill />,
    title: 'Bookmark',
    notify: 0
  },
  {
    key: 'lists',
    icon: <Lists />,
    iconSelected: <ListsFill />,
    title: 'Lists',
    notify: 0
  },
  {
    key: 'profile',
    icon: <Profile />,
    iconSelected: <ProfileFill />,
    title: 'Profile',
    notify: 0
  },
  {
    key: 'more',
    icon: <More />,
    iconSelected: <More />,
    title: 'More',
    notify: 0
  }
]

function Navigation({ selectedKey = 'home' }) {
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const selected = selectedKey === menu.key
        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
          >
            {selected ? menu.iconSelected : menu.icon}
            <TextTitle>{menu.title}</TextTitle>
          </NavigationButton>
        )
      })}
    </nav>
  )
}

export default Navigation
