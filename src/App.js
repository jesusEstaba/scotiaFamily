import React, { Component } from 'react';
import Home from './pages/Home'
import Partner from './pages/Partner'
import Product from './pages/Product'
import Login from './pages/Login'

export default class App extends Component {
  state = {}

  componentDidMount = () => {
    this.loadHomeScreen()
  }

  loadHomeScreen = () => {
    if (!localStorage.getItem('user')) {
      this.setState({
        screen: <Login 
          homeScreen={this.loadHomeScreen}
        />
      })

      return;
    }

    this.setState({
      screen: <Home 
        partnerScreen={this.loadPartnerScreen}
        experienceScreen={this.loadExperienceScreen} 
      />
    })
  }

  loadPartnerScreen = (id) => {
    this.setState({
      screen: <Partner productScreen={this.loadProductScreen}  id={id} />
    })
  }

  loadProductScreen = (props) => {
    this.setState({
      screen: <Product {...props} />
    })
  }
  
  loadExperienceScreen = (props) => {
    this.setState({
      screen: <Product {...props} />
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
