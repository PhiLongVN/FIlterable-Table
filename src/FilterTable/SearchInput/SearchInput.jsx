import React, { Component } from 'react'

class SearchInput extends Component {
  render() {
    const { value, inStock, handleChange } = this.props
    return (
      <form className="SearchInput">
        <input name="search" type="text" value={value} onChange={handleChange} />
        <br />
        <div>
          <input name="check" type="checkbox" checked={inStock} onChange={handleChange} />
          Only show products in stock
        </div>
      </form>
    )
  }
}

export default SearchInput
