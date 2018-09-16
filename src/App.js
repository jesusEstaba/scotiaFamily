import React, { Component } from 'react';
import Home from './pages/Home'
import Partner from './pages/Partner'
import Product from './pages/Product'

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
      screen: <Partner productScreen={this.loadProductScreen}  id={id} />
    })
  }

  loadProductScreen = (props) => {
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
