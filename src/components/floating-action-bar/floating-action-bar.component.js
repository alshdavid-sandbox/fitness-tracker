import React, { Component } from 'react';
import './floating-action-bar.component.css'

export class FloatingActionBar extends Component {
    render() {
      return (
        <div 
            className="app-floating-action-bar"
            onClick={this.props.onClick}>
            { this.props.text }
        </div>
      );
    }
}