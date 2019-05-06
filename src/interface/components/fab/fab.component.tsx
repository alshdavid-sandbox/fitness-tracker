import React from 'react';
import './fab.component.scss'

export const FloatingActionBar = (props: any) =>
    <div 
        onClick={props.onClick} 
        className="fab-component">
        {props.children}
    </div>