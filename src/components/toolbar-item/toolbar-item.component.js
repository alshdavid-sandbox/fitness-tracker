import React, { Component } from 'react';
import './toolbar-item.component.css'

export class ToolbarItem extends Component {
    render() {
      return (
        <div 
            className="app-toolbar-item-component"
            onClick={this.props.onClick}>
            { this.props.text }
        </div>
      );
    }
}