import React, { Component } from 'react';

import ExperienceList from '../components/ExperienceList'
import PartnerList from '../components/PartnerList';

export default class Home extends Component {
  render() {
    return (
      <main>
        <ExperienceList />
        <PartnerList />
      </main>
    );
  }
}