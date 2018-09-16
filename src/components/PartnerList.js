import React, { Component } from 'react';
import scotiaFamilyAPI from '../services/scotiaFamilyAPI'
import Partner from '../components/Partner'

export default class PartnerList extends Component {
    state = {
        partners : []
    }

    componentDidMount = async () => {
        scotiaFamilyAPI
            .endpoint('partner')
            .then(partners => this.setState({partners}))
    }

    render() {
        return (
            <section className="scroll py-3">
                {
                    this.state.partners.map(partner => <Partner {...partner} />)
                }
            </section>
        );
    }
}
