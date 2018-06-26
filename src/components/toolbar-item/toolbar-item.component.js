import React, { Component } from 'react';
import './toolbar-item.component.css'

export class ToolbarItem extends Component {

    isActive = () => {
      console.log(this.props.route)
      console.log(window.location.hash)
      console.log(window.location.hash === '#' + this.props.route)
      return window.location.pathname === this.props.route || window.location.hash === '#' + this.props.route
        ? 'active'
        : ''
    }

    render() {
      return (
        <div 
            className={`app-toolbar-item-component ${this.isActive()}`}
            onClick={e => this.props.onClick(e)}>
            <i className={`fas ${this.props.icon}`}></i>
            <div className="text">{this.props.text}</div>
        </div>
      );
    }
}