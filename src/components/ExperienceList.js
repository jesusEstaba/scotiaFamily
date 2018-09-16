import React, { Component } from 'react';
import scotiaFamilyAPI from '../services/scotiaFamilyAPI'
import Experience from '../components/Experience'

export default class ExperienceList extends Component {
    state = {
        experiences : []
    }

    componentDidMount = async () => {
        scotiaFamilyAPI
            .endpoint('experience')
            .then(experiences => this.setState({experiences}))
    }

    render() {
        return (
            <section className="scroll py-4 bg-light">
                {
                    this.state.experiences.map(experience => <Experience experienceScreen={this.props.experienceScreen} {...experience} />)
                }
            </section>
        );
    }
}
