import React from 'react'
import cn from 'classnames'

import styles from './follow.module.css'

import WidgetHeader from './widget-header'
import FollowItem from './follow-item'
import WidgetFooter from './widget-footer'

function Follow({ className }) {
  return (
    <>
      <div className={cn([styles.container, className])}>
        <WidgetHeader name="Who to follow"></WidgetHeader>

        <FollowItem />

        <FollowItem
          photo="https://pbs.twimg.com/profile_images/988162982835179520/YWs_IwJ3_400x400.jpg"
          name="Rocket Lab"
          slug="RocketLab"
        />

        <FollowItem
          photo="https://pbs.twimg.com/profile_images/1219690259090432002/g-fwwjS7_400x400.jpg"
          name="Gazapizm"
          slug="Gazapizm"
        />

        <WidgetFooter />
      </div>
    </>
  )
}

export default Follow
