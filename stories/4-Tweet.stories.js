import React from 'react'

import TweetImage from '../components/images/tweet-image'
import TweetEditor from '../components/tweet-editor'
import TweetTextarea from '../components/forms/tweet-textarea'
import TweetEditorButtons from '../components/tweet-editor-buttons'
import PageTitle from '../components/page-title'
import TweetContainer from '../components/tweet-container'
import TweetButtons from '../components/tweet-buttons'

export default {
  title: 'Tweet'
}

export const Title = () => <PageTitle></PageTitle>

export const EditorTextarea = () => <TweetTextarea />

export const EditorButtons = () => <TweetEditorButtons />

export const Editor = () => <TweetEditor />

export const Image = () => <TweetImage />

export const TweetBtns = () => <TweetButtons />

export const TweetModule = () => <TweetContainer />
