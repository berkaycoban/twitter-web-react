import React from 'react'
import cn from 'classnames'

import styles from './widget-footer.module.css'

import TextBody from '../typography/text-body'
import ListItem from '../list-item'

function WidgetFooter({ children = 'Show more' }) {
  return (
    <ListItem className={styles.widgetFooter} border={false}>
      <TextBody>{children}</TextBody>
    </ListItem>
  )
}

export default WidgetFooter
