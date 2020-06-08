import React from 'react'

import TextTitle from '../components/typography/text-title'

export default {
  title: 'Typography'
}

export const Title = () => (
  <div>
    <TextTitle>Hello World!</TextTitle>
    <TextTitle bold={false}>Hello World!</TextTitle>
  </div>
)
