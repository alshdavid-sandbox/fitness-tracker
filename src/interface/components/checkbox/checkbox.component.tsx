import React from 'react';
import './checkbox.component.scss'

export interface ICheckboxProps {
    checked?: boolean
}

export const Checkbox = ({ checked }: ICheckboxProps) =>
    <div 
      className="checkbox-component"
      style={{ backgroundColor: checked ? '#333' : '' }}></div>