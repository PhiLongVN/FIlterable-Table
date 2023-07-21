import React, { Component } from 'react'
import ProductTable from './ProductTable/ProductTable'
import SearchInput from './SearchInput/SearchInput'

const productListt = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
]
class FilterTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productList: [],
      inStock: false,
      value: '',
    }
  }
  handleChange = (event) => {
    let name = event.target.name

    if (name === 'search') {
      this.setState({
        value: event.target.value,
      })
    } else if (name === 'check') {
      this.setState({
        inStock: event.target.checked,
      })
    }
  }

  componentDidMount() {
    this.setState({
      productList: productListt,
    })
  }

  render() {
    const { productList, inStock, value } = this.state
    return (
      <div className="FilterTable">
        {/* input */}
        <SearchInput value={value} inStock={inStock} handleChange={this.handleChange} />
        {/* render */}

        <ProductTable productList={productList} value={value} inStock={inStock} />
      </div>
    )
  }
}

export default FilterTable
