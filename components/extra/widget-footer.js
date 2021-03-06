import React from 'react'
import cn from 'classnames'

import styles from './widget-footer.module.css'

import TextBody from '../text/body'
import ListItem from '../helpers/list-item'

function WidgetFooter({ children = 'Show more' }) {
  return (
    <ListItem className={styles.widgetFooter} border={false}>
      <TextBody>{children}</TextBody>
    </ListItem>
  )
}

export default WidgetFooter
