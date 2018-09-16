import React, { Component } from 'react';
import scotiaFamilyAPI from '../services/scotiaFamilyAPI'

export default class ProductList extends Component {
    state = {
        products : []
    }

    componentDidMount = async () => {
        scotiaFamilyAPI
            .endpoint(`partner/${this.props.id}`)
            .then(({products}) => {
                this.setState({products})
            })
    }

    selectProduct = (props) => {
        this.props.productScreen(props)
    }

    render() {
        return (
            <section className="row">
                {
                    this.state.products.map(product => 
                        <div onClick={() => { this.selectProduct(product) }} className="col-sm-6">
                            <div className="card">
                                <img src={product.image} className="img-fluid"/>
                                {product.points}
                            </div>
                        </div>
                    )
                }
            </section>
        );
    }
}
