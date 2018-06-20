import React, { Component } from 'react';
import './toolbar.component.css'

export class Toolbar extends Component {
    render() {
      return (
        <div className={`app-toolbar-component ${this.props.top ? 'top' : ''}`}>
            <div className="app-toolbar">{ this.props.children }</div>
        </div>
      );
    }
}