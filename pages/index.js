import React from 'react'

import staticTweets from '../constants/static-tweets'

import Layout from '../components/layout'
import TweetEditor from '../components/main/tweet-editor'
import TweetContainer from '../components/main/tweet-container'
import { TimelineProp } from '../components/icons'

function HomePage() {
  return (
    <>
      <Layout pageTitle="Home" titleIcon={<TimelineProp />}>
        <TweetEditor />
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
      </Layout>
    </>
  )
}

export default HomePage
