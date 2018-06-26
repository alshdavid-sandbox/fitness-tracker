import React, { Component } from 'react';
import './navbar.component.css'

export class Navbar extends Component {
    render() {
      return (
        <div className="app-navbar-component">
            <div className="app-navbar">
                <div 
                    onClick={this.props.onClickLeft}
                    className="left" 
                    dangerouslySetInnerHTML={{__html:this.props.left}}
                />
                <div 
                    className="center" 
                    dangerouslySetInnerHTML={{__html:this.props.center}} 
                />
                <div 
                    onClick={this.props.onClickRight}
                    className="right" 
                    dangerouslySetInnerHTML={{__html: this.props.right }} 
                />
            </div>
        </div>
      );
    }
}