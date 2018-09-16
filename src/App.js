import React, { Component } from 'react';
import Home from './pages/Home'
import Partner from './pages/Partner'

export default class App extends Component {
  state = {

  }

  componentDidMount = () => {
    this.loadHomeScreen()
  }

  loadHomeScreen = () => {
    this.setState({
      screen: <Home partnerScreen={this.loadPartnerScreen} />
    })
  }

  loadPartnerScreen = (id) => {
    this.setState({
      screen: <Partner id={id} />
    })
  }
  
  render() {
    return (
      <div>
        { this.state.screen }
      </div>
    );
  }
}
