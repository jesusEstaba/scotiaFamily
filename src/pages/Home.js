import React, { Component } from 'react';

import ExperienceList from '../components/ExperienceList'
import PartnerList from '../components/PartnerList';
import Points from '../components/Points';

export default class Home extends Component {
  state = {
    balance: 0
  }

  componentDidMount = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    this.setState({
      balance: user.cards.find(card => card.default).balance
    })
  }

  render() {
    return (
      <main>
        <ExperienceList experienceScreen={this.props.experienceScreen} />
        <PartnerList partnerScreen={this.props.partnerScreen} />
        <Points points={ this.state.balance } />
      </main>
    );
  }
}