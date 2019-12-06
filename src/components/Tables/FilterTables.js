import React from 'react'
import styled from 'styled-components'
import Checkbox from 'rc-checkbox'

const FilterTables = ({ filter, setFilter }) => (
  <div>
    <Header>Filter recommendations by type</Header>
    Books:
    <Checkbox defaultChecked onChange={() => setFilter({ ...filter, books: !filter.books })} />
    Audio:
    <Checkbox defaultChecked onChange={() => setFilter({ ...filter, audio: !filter.audio })} />
  </div>
)

const Header = styled.h2`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 4px;
`

export default FilterTables
