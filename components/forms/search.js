import React from 'react'

import Input from './input'

import { Search } from '../icons'

function SearchInput({
  type = 'text',
  name = 'search',
  placeholder = 'Search Twitter',
  ...props
}) {
  return (
    <Input type={type} name={name} placeholder={placeholder} {...props}>
      <Search />
    </Input>
  )
}

export default SearchInput
