import React, { Component } from 'react'
import { Navbar, Toolbar, ToolbarItem } from '../../components'

export class WeightTrackerPage extends Component {
    render() {
        return (
            <div className="app-weight-tracker">
                <Navbar 
                    left="Fitness Tracker"
                    right="Weight" 
                />
                
                <Toolbar top={true}>
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
