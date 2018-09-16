import React, { Component } from 'react';

export default class Experience extends Component {
  selectExperience = () => {
    this.props.experienceScreen(this.props)
  }
  
  render() {
    return (
      <div className="mx-3" onClick={ this.selectExperience }>
        <img src={this.props.image} className="rounded" width="300" />
        {this.props.name}
      </div>
    );
  }
}