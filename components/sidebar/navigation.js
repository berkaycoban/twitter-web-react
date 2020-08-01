import React from 'react'
import { useRouter } from 'next/router'

import { MENU } from '../../constants/navigation'
import styles from './navigation.module.css'

import NavigationButton from '../buttons/navigation-button'
import TextTitle from '../typography/text-title'

function Navigation({ flat }) {
  const router = useRouter()
  return (
    <>
      <nav className={styles.nav}>
        {Object.keys(MENU).map((key) => {
          const item = MENU[key]
          const showTitle = !flat && item.title.length > 0
          const selected = router.asPath === item.path

          return (
            <NavigationButton
              key={`navigation-${key}`}
              notify={item.notify}
              selected={selected}
              href={item.path}
              className={styles.navButton}
            >
              {selected ? item.iconSelected : item.icon}
              {showTitle && <TextTitle>{item.title}</TextTitle>}
            </NavigationButton>
          )
        })}
      </nav>
    </>
  )
}

export default Navigation
