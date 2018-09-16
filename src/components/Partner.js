import React, { Component } from 'react';

export default class Home extends Component {
  
  selectPartner = () => {
    this.props.partnerScreen(this.props._id)
  }

  render() {
    return (
      <div onClick={this.selectPartner} className="mx-2">
        <img src={this.props.image} className="rounded-circle shadow-sm border" width="100" />
      </div>
    );
  }
}