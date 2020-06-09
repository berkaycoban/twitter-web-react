import React from 'react'

import Stack from '../components/stack'
import TextTitle from '../components/typography/text-title'
import TextBody from '../components/typography/text-body'

export default {
  title: 'Typography'
}

export const Title = () => (
  <Stack column>
    <TextTitle>Hello World!</TextTitle>
    <TextTitle bold={false}>Hello World!</TextTitle>
  </Stack>
)

export const Body = () => (
  <Stack column>
    <TextBody bold>Hello World!</TextBody>
    <TextBody>Hello World!</TextBody>
  </Stack>
)
