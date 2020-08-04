import React from 'react'

import staticTweets from '../constants/static-tweets'

import Layout from '../components/layout'
import TweetEditor from '../components/main/tweet-editor'
import Tweet from '../components/tweet'
import { TimelineProp } from '../components/icons'

function HomePage() {
  return (
    <Layout pageTitle="Home" icon={<TimelineProp />}>
      <TweetEditor />
      {staticTweets.map((t) => {
        return (
          <Tweet
            photo={t.photo}
            name={t.name}
            slug={t.slug}
            datetime={t.datetime}
            text={t.tweet}
            image={t.image}
            reply_count={t.reply}
            retweet_count={t.retweet}
            like_count={t.like}
            key={t.slug}
          />
        )
      })}
    </Layout>
  )
}

export default HomePage
