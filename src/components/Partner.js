import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="mx-2">
        <img src={this.props.image} className="rounded-circle shadow-sm border" width="100" />
      </div>
    );
  }
}