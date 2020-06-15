import React from 'react'

import styles from './navigation.module.css'

import NavigationButton from '../buttons/navigation-button'
import TextTitle from '../typography/text-title'
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
  ProfileFill,
  Search
} from '../icons'

const MENU = [
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
    title: 'Notifications',
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
    title: 'Bookmarks',
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

function Navigation({ flat = false, search = false, selectedKey = 'home' }) {
  return (
    <>
      <div className={styles.logo}>
        <NavigationButton className={styles.twitterIcon}>
          <Twitter />
        </NavigationButton>
      </div>
      <nav className={styles.nav}>
        {MENU.map((menu) => {
          const showTitle = !flat && menu.title.length > 0
          const selected = selectedKey === menu.key
          const showSearch = search && menu.key === 'explore'

          return (
            <>
              {showSearch ? (
                <NavigationButton key={'search'} notify={0}>
                  <Search />
                </NavigationButton>
              ) : (
                <NavigationButton
                  key={menu.key}
                  notify={menu.notify}
                  selected={selected}
                >
                  {selected ? menu.iconSelected : menu.icon}
                  {showTitle && <TextTitle>{menu.title}</TextTitle>}
                </NavigationButton>
              )}
            </>
          )
        })}
      </nav>
    </>
  )
}

export default Navigation
