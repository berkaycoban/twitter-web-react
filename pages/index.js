import React from 'react'

import mediaSize from '../constants/custom-media-size'
import staticTweets from '../constants/static-tweets'

import Layout from '../components/layout'
import Sidebar from '../components/col-sidebar'
import Main from '../components/col-main'
import Extra from '../components/col-extra'
import TweetContainer from '../components/main/tweet-container'

import useWindowSize from '../hooks/useWindowSize'

function HomePage() {
  const size = useWindowSize()

  return (
    <Layout>
      <Sidebar
        flat={size.width < mediaSize.DESKTOP_SIZE}
        search={size.width < mediaSize.TABLET_SIZE}
      ></Sidebar>

      <Main>
        {staticTweets.map((t) => {
          return (
            <TweetContainer
              photo={t.photo}
              name={t.name}
              slug={t.slug}
              time={t.time}
              tweet={t.tweet}
              image={t.image}
              reply={t.reply}
              retweet={t.retweet}
              like={t.like}
            />
          )
        })}
      </Main>

      {size.width > mediaSize.TABLET_SIZE && <Extra>extra</Extra>}
    </Layout>
  )
}

export default HomePage
