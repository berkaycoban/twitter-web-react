import React from 'react'
import { useRouter } from 'next/router'

import MENU from '../../constants/navigation'
import styles from './navigation.module.css'

import NavigationButton from '../buttons/navigation-button'
import TextTitle from '../typography/text-title'
import { Search } from '../icons'

function Navigation({ flat = false, search = false }) {
  const router = useRouter()
  return (
    <>
      <nav className={styles.nav}>
        {MENU.map((menu) => {
          const showTitle = !flat && menu.title.length > 0
          const selected = router.asPath === menu.path
          const showSearch = search && menu.key === 'explore'

          return (
            <>
              {showSearch ? (
                <NavigationButton
                  key={'search'}
                  notify={0}
                  className={styles.navButton}
                >
                  <Search />
                </NavigationButton>
              ) : (
                <NavigationButton
                  key={menu.key}
                  notify={menu.notify}
                  selected={selected}
                  href={menu.path}
                  className={styles.navButton}
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
