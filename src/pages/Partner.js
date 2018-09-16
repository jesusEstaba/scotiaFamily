import React, { Component } from 'react';

import ProductList from '../components/ProducList'

export default class Partner extends Component {
  render() {
    return (
      <main>
        <ProductList productScreen={this.props.productScreen} id={this.props.id} />
      </main>
    );
  }
}