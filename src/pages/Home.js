import React, { Component } from 'react';

import ExperienceList from '../components/ExperienceList'
import PartnerList from '../components/PartnerList';
import Points from '../components/Points';

export default class Home extends Component {
  render() {
    return (
      <main>
        <ExperienceList experienceScreen={this.props.experienceScreen} />
        <PartnerList partnerScreen={this.props.partnerScreen} />
        <Points points="200" />
      </main>
    );
  }
}