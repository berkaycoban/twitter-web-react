import {
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
} from '../components/icons'

export const MENU = [
  {
    key: 'home',
    icon: <Home />,
    iconSelected: <HomeFill />,
    title: 'Home',
    notify: 0,
    href: '/'
  },
  {
    key: 'explore',
    icon: <Explore />,
    iconSelected: <ExplorerFill />,
    title: 'Explore',
    notify: 0,
    href: '/explore'
  },
  {
    key: 'notification',
    icon: <Notification />,
    iconSelected: <NotificationFill />,
    title: 'Notifications',
    notify: 17,
    href: '/notifications'
  },
  {
    key: 'messages',
    icon: <Messages />,
    iconSelected: <MessagesFill />,
    title: 'Messages',
    notify: 0,
    href: '/messages'
  },
  {
    key: 'bookmark',
    icon: <Bookmark />,
    iconSelected: <BookmarkFill />,
    title: 'Bookmarks',
    notify: 0,
    href: '/bookmarks'
  },
  {
    key: 'lists',
    icon: <Lists />,
    iconSelected: <ListsFill />,
    title: 'Lists',
    notify: 0,
    href: '/berkaycoban35/lists'
  },
  {
    key: 'profile',
    icon: <Profile />,
    iconSelected: <ProfileFill />,
    title: 'Profile',
    notify: 0,
    // to-do: username gelecek
    href: '/berkaycoban35'
  },
  {
    key: 'more',
    icon: <More />,
    iconSelected: <More />,
    title: 'More',
    notify: 0,
    href: ''
  }
]

export default MENU
