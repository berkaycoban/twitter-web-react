import React from 'react'
import cn from 'classnames'

import Button from './button'

import styles from './tweet-button.module.css'

function countFormatter(count) {
  return Math.abs(count) > 999
    ? Math.sign(count) * (Math.abs(count) / 1000).toFixed(1) + 'K'
    : Math.sign(count) * Math.abs(count)
}

function TweetButton({ count, children, color = '', colorBg = '', ...props }) {
  return (
    <>
      <div
        className={cn([styles.tweetButton])}
        style={{ '--hoverColor': `${color}`, '--hoverBgColor': `${colorBg}` }}
      >
        <Button {...props}>
          {children}
          {count > 0 && (
            <span className={styles.count}>{countFormatter(count)}</span>
          )}
        </Button>
      </div>
    </>
  )
}

export default TweetButton
