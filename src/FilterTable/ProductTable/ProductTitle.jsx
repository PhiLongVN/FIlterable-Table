import React, { Component } from 'react'

class ProductTitle extends Component {
  render() {
    const { category } = this.props
    return (
      <tr>
        <th colSpan={2}>{category}</th>
      </tr>
    )
  }
}

export default ProductTitle
