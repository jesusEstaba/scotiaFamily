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
            <section className="scroll py-4">
                {
                    this.state.partners.map(partner => <Partner partnerScreen={this.props.partnerScreen} {...partner} />)
                }
            </section>
        );
    }
}
