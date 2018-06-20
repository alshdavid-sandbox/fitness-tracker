import React, { Component } from 'react';
import './navbar.component.css'

export class Navbar extends Component {
    render() {
      return (
        <div className="app-navbar-component">
            <div className="app-navbar">
                <div className="left">{this.props.left}</div>
                <div className="center">{this.props.center}</div>
                <div className="right">{this.props.right}</div>
            </div>
        </div>
      );
    }
}