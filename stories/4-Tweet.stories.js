import React from 'react'

import TweetImage from '../components/images/tweet-image'
import TweetEditor from '../components/tweet-editor'
import TweetTextarea from '../components/forms/tweet-textarea'
import TweetEditorButtons from '../components/tweet-editor-buttons'
import PageTitle from '../components/page-title'
import TweetContainer from '../components/tweet-container'
import TweetButtons from '../components/tweet-buttons'
import NavigationButton from '../components/buttons/navigation-button'
import { Messages, TimelineProp } from '../components/icons'

export default {
  title: 'Tweet'
}

export const PageTitlee = () => (
  <>
    <PageTitle name="Home">
      <NavigationButton>
        <TimelineProp />
      </NavigationButton>
    </PageTitle>
    <PageTitle name="Messages">
      <NavigationButton>
        <Messages />
      </NavigationButton>
    </PageTitle>
  </>
)

export const EditorTextarea = () => <TweetTextarea />

export const EditorButtons = () => <TweetEditorButtons />

export const Editor = () => <TweetEditor />

export const TweetImg = () => <TweetImage />

export const TweetBtns = () => <TweetButtons />

export const TweetModule = () => <TweetContainer />
