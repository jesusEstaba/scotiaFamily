import React, { Component } from 'react';

export default class Points extends Component {
  render() {
    return (
      <section className="px-2 py-4 bg-danger">
        <h1 className="text-white">{ this.props.points } Pts</h1>
      </section>
    );
  }
}