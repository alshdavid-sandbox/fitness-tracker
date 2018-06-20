import React, { Component } from 'react';
import './lifes-entry.component.css'

export class LiftsEntry extends Component {
    constructor() {
        super()

        this.state = {
            isOpen: false
        }
    }
    render() {
      return (
        <div 
            className="app-lifts-entry" 
            style={{
                backgroundColor: `#${this.props.color}`
            }}
        >
            <div 
                className="lift-name"
                onClick={() => this.setState({ ...this.state, isOpen: !this.state.isOpen })}    
            >
                {this.props.lift}
                <div className={`type-badge ${this.props.type}`}>{this.props.type}</div>
            </div>
            <div className="drawer" style={{
                display: this.state.isOpen ? 'block' : 'none'
            }}>
                <div className="lift title">
                    <div>Reps</div>
                    <div>Weight</div>
                </div>
                { this.props.lifts && this.props.lifts.map((lift, key) => (
                    <div key={key} className="lift">
                        <div>{lift.reps}</div>
                        <div>{lift.weight}</div>
                    </div>
                ))}
            </div>
        </div>
      );
    }
}