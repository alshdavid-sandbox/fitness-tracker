import React, { Component } from 'react';
import './date-entry.component.css'

export class DateEntry extends Component {
    constructor() {
        super()

        this.state = {
            isOpen: false
        }
    }
    render() {
      return (
        <div className="app-date-entry">
            {this.props.date}
        </div>
      );
    }
}