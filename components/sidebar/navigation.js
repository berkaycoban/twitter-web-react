import React from 'react'

import styles from './navigation.module.css'

import NavigationButton from '../buttons/navigation-button'
import TextTitle from '../typography/text-title'
import { Twitter, Search } from '../icons'

import MENU from '../../constants/navigation'

function Navigation({ flat = false, search = false, selectedKey = '/' }) {
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
          const selected = selectedKey === menu.href
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
                  href={menu.href}
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
