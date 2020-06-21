import React from 'react'

import TweetImage from '../components/main/tweet-image'
import TweetEditor from '../components/main/tweet-editor'
import TweetTextarea from '../components/forms/tweet-textarea'
import TweetEditorButtons from '../components/main/tweet-editor-buttons'
import PageTitle from '../components/main/page-title'
import TweetContainer from '../components/main/tweet-container'
import TweetButtons from '../components/main/tweet-buttons'
import NavigationButton from '../components/buttons/navigation-button'
import { Messages, TimelineProp } from '../components/icons'

export default {
  title: 'Main'
}

export const Title = () => (
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
