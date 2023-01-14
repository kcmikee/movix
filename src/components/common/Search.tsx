import React from 'react'
import styled from 'styled-components'
import { Search as searchIcon } from '@styled-icons/boxicons-regular/Search'

const SearchBar = styled.div`
  display: flex;
  padding: 10px 4px;
  overflow: hidden;
  background: transparent;
  height: 50px;
  border-radius: 45px;
  border: 1px solid #ffffff;
  // box-shadow: 5px 5px 14px 1px rgb(0 0 0 / 20%);
  width: ${(props: { width: string }) => props.width};
  input {
    width: 90%;
    height: 50px;
    border: none;
    background: transparent;
    outline: none;
  }
  input::placeholder {
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
  }
  input:focus {
    border: 1px solid transparent;
  }
`
const SearchIcon = styled(searchIcon)`
  color: #ffffff;
  height: 100%;
  width: 20%;
`
function Search({ width, holder, handleFilter, wordEntered }: any) {
  return (
    <SearchBar width={width}>
      <input
        type="text"
        placeholder={holder}
        onChange={handleFilter}
        value={wordEntered}
        className="-mt-[9px] border-transparent focus:border-transparent focus:ring-0"
      />
      <SearchIcon />
    </SearchBar>
  )
}

export default Search
