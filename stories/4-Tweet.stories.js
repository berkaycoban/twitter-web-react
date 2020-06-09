import React from 'react'

import TweetImage from '../components/images/tweet-image'
import TweetEditor from '../components/tweet-editor'
import TweetTextarea from '../components/forms/tweet-textarea'
import TweetButtons from '../components/tweet-buttons'

export default {
  title: 'Tweet'
}

export const EditorTextarea = () => <TweetTextarea />

export const EditorButtons = () => <TweetButtons />

export const Editor = () => <TweetEditor />

export const Image = () => <TweetImage />
