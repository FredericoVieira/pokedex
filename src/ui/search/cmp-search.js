import React from 'react'

const Search = ({ onChange, value }) => (
  <input
    type="text"
    className="search"
    onChange={onChange}
    value={value}
    placeholder="Enter pokemon name..."
    autoFocus
  />
)

export default Search
