import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    return (
      <div className="mx-3">
        <img src={this.props.image} className="rounded" width="300" />
        {this.props.name}
      </div>
    );
  }
}