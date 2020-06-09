import React from 'react'

import TweetImage from '../components/images/tweet-image'
import TweetEditor from '../components/tweet-editor'
import TweetTextarea from '../components/forms/tweet-textarea'
import TweetButtons from '../components/tweet-buttons'
import PageTitle from '../components/page-title'

export default {
  title: 'Tweet'
}

export const Title = () => <PageTitle></PageTitle>

export const EditorTextarea = () => <TweetTextarea />

export const EditorButtons = () => <TweetButtons />

export const Editor = () => <TweetEditor />

export const Image = () => <TweetImage />
