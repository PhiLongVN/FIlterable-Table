import React, { Component, Fragment } from 'react'
import ProductTitle from './ProductTitle'
import ProductDetail from './ProductDetail'

class ProductTable extends Component {
  render() {
    let productTitle = null
    const { productList, value, inStock } = this.props

    const product = productList.map((item) => {
      if (item.name.toLowerCase().indexOf(value.toLowerCase()) === -1) {
        return undefined
      }
      if (inStock && !item.stocked) {
        return undefined
      }
      if (item.category !== productTitle) {
        productTitle = item.category

        return (
          <Fragment key={item.name}>
            <ProductTitle category={item.category} />
            <ProductDetail name={item.name} price={item.price} />
          </Fragment>
        )
      }

      return <ProductDetail key={item.name} name={item.name} price={item.price} />
    })

    return (
      <table className="TitleItem">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>{product}</tbody>
      </table>
    )
  }
}

export default ProductTable
