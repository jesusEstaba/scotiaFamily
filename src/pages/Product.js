import React, { Component } from 'react';

import ProductList from '../components/ProducList'

export default class Product extends Component {
  render() {
    return (
      <main className="pb-2">
        <p className="text-center">
          <img src={this.props.image} className="img-fluid"/>
        </p>
        <div className="p-4">
          <h4>
            {this.props.name}
          </h4>
          <h2>COP ${ this.props.amount }</h2>
          <h2>PTS { this.props.points }</h2>
          <p>
            { this.props.description }
          </p>
        </div>
        <button className="btn btn-primary btn-lg btn-block">Comprar</button>
      </main>
    );
  }
}