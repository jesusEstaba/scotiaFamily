import React, { Component } from 'react';

import scotiaFamilyAPI from '../services/scotiaFamilyAPI'

export default class Product extends Component {
  goal = () => {
    scotiaFamilyAPI.auth(null, null, (user) => {
      const options = {
        method: 'post', 
        body:`state=started&user=${ user._id }&products=${ this.props._id }`, 
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
      }

      scotiaFamilyAPI
        .endpoint('goal', options)
        .then(() => {
          alert('Sigue asi')
        })
    })
  }

  exchange = () => {
    scotiaFamilyAPI.auth(null, null, (user) => {
      const options = {
        method: 'post', 
        body:`user=${ user._id }&products=${ this.props._id }&amount=${ this.props.amount }&place=${ 'Carulla' }&points=${ this.props.points }&income=${ false }`, 
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
      }
      console.log(this.props)
      const card = user.cards.find(card => card.default)
      const value = card.balance - this.props.points

      if (value > card.balance) {
        alert('No tienes suficientes puntos')
        return;
      }

      scotiaFamilyAPI
        .endpoint('card/' + card._id, {
          method: 'put', 
          body:`balance=${ value }`, 
          headers: {'Content-Type':'application/x-www-form-urlencoded'}
        })
        .then(()=>{
          return scotiaFamilyAPI.endpoint('point', options)
        })
        .then(() => {
          alert('Listo')
          scotiaFamilyAPI.update()
        })
    })
  }

  render() {
    return (
      <main className="pb-2">
        <p className="text-center">
          <img src={this.props.image} className="img-fluid"/>
        </p>
        <div className="p-4">
          <h4>
            {this.props.name}
          </h4>
          <h2>COP ${ this.props.amount }</h2>
          <h2>PTS { this.props.points }</h2>
          <p>
            { this.props.description }
          </p>
        </div>
        <button onClick={ this.goal } className="btn btn-success btn-lg btn-block">Ahorrar</button>
        <br />
        <button onClick={ this.exchange } className="btn btn-primary btn-lg btn-block">Redimir</button>
      </main>
    );
  }
}