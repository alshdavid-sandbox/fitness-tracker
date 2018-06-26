import React, { Component } from 'react'
import { Navbar, ToolbarComplete } from '../../components'

export class WeightPage extends Component {
    render() {
        return (
            <div className="app-weight-tracker">
                <Navbar 
                    left='<i class="fas fa-bars"></i>' 
                    center="Weight"
                    right='<i class="fas fa-plus"></i>' 
                />
                
                <ToolbarComplete changeRoute={route => this.props.history.push(route)} />
            </div>
        )
    }
}
