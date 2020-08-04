import React from 'react'

import TweetImage from '../components/tweet-image'
import TweetEditor from '../components/main/tweet-editor'
import TweetTextarea from '../components/main/tweet-textarea'
import TweetEditorButtons from '../components/main/tweet-editor-buttons'
import PageTitle from '../components/page-title'
import Tweet from '../components/tweet'
import TweetButtons from '../components/main/tweet-buttons'
import { Messages, TimelineProp } from '../components/icons'

export default {
  title: 'Main'
}

export const Title = () => (
  <>
    <PageTitle name="Home" icon={<TimelineProp />} />
    <PageTitle name="Messages" icon={<Messages />} />
  </>
)

export const EditorTextarea = () => <TweetTextarea />

export const EditorButtons = () => <TweetEditorButtons />

export const Editor = () => <TweetEditor />

export const TweetImg = () => <TweetImage />

export const TweetBtns = () => <TweetButtons />

export const TweetModule = () => <Tweet datetime={new Date(2020, 8, 3)} />
