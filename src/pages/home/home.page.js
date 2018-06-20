import React, { Component } from 'react'
import { Navbar, Toolbar, ToolbarItem } from '../../components'

export class HomePage extends Component {
    componentDidMount() {
        this.props.history.push('/lifts')
    }
    render() {
        return (
            <div className="app-weight-tracker">
                <Navbar center="Fitness Tracker" />
                Home page
                <Toolbar>
                    <ToolbarItem
                        text="Lifts"
                        onClick={() => this.props.history.push('/lifts')}
                    />
                    <ToolbarItem
                        text="Weight"
                        onClick={() => this.props.history.push('/weight')}
                    />
                </Toolbar>
            </div>
        )
    }
}
