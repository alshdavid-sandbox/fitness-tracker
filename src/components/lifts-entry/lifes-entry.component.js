import React, { Component } from 'react';
import './lifes-entry.component.css'

export class LiftsEntry extends Component {
    constructor() {
        super()

        this.state = {
            isOpen: false
        }
    }

    open = () => {
        if (!this.props.sets || !this.props.sets.length) {
            return
        }
        this.setState({ ...this.state, isOpen: !this.state.isOpen })
    }

    getAverages = (sets) => {
        try {
            let totalReps = sets.reduce((a, b) => a + parseInt(b.reps, 10), 0)
            let totalWeight = sets.reduce((a, b) => a + parseInt(b.weight, 10), 0)

            if (!totalReps && !totalWeight) {
                throw new Error('')
            }
            return `${Math.floor(totalReps / sets.length)} / ${totalWeight / sets.length}`
        } catch (error) {
            return ''
        }
        
    }

    render() {
      return (
        <div 
            onClick={this.props.onClick} 
            className="app-lifts-entry" 
            style={{
                backgroundColor: `#${this.props.color}`
            }}
        >
            <div className="lift-name">
                {this.props.movement}
            </div>
            <div className='right'>{this.getAverages(this.props.sets)}</div>
            {/* <i className='fas fa-chevron-right icon'/> */}
        </div>
      );
    }
}