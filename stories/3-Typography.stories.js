import React from 'react'

import Stack from '../components/stack'
import TextTitle from '../components/text/title'
import TextBody from '../components/text/body'
import TextSmall from '../components/text/small'

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

export const Small = () => (
  <Stack column>
    <TextSmall normal>Hello World!</TextSmall>
    <TextSmall>Hello World!</TextSmall>
  </Stack>
)
