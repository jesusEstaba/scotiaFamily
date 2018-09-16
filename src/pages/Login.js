import React, { Component } from 'react';

import scotiaFamilyAPi from '../services/scotiaFamilyAPI'

export default class Login extends Component {
    login = () => {
        scotiaFamilyAPi.auth('jeec.estaba@gmail.com','root001', () => {
            this.props.homeScreen()
        })
    }
    render() {
    return (
      <main className="pb-2">
        <h1>Scotia Family</h1>
        <button onClick={ this.login } className="btn btn-primary btn-lg btn-block">Entrar</button>
      </main>
    );
  }
}