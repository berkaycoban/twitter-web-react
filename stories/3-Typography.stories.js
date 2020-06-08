import React from 'react'

import TextTitle from '../components/typography/text-title'
import TextBody from '../components/typography/text-body'

export default {
  title: 'Typography'
}

export const Title = () => (
  <div>
    <TextTitle>Hello World!</TextTitle>
    <TextTitle bold={false}>Hello World!</TextTitle>
  </div>
)

export const Body = () => (
  <div>
    <TextBody>Hello World!</TextBody>
    <TextBody bold={false}>Hello World!</TextBody>
  </div>
)
