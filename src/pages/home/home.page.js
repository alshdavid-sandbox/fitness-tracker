import React, { Component } from 'react'
import { Navbar, ToolbarComplete } from '../../components'

export class HomePage extends Component {
    componentDidMount() {
        this.props.history.push('/lifts')
    }
    render() {
        return (
            <div className="app-weight-tracker">
                <Navbar center="Fitness Tracker" />
                Home page
                <ToolbarComplete />
            </div>
        )
    }
}
