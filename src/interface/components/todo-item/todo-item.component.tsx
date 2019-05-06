import React from 'react';
import './todo-item.component.scss'
import { Checkbox } from '../checkbox/checkbox.component'

export interface ITodoItemProps {
    name?: string
    date?: string
    completed?: boolean
}

export const TodoItem = ({ name, date, completed, ...remainingProps }: any) =>
    <div 
      { ...remainingProps } 
      className="todo-item-component">
      <div> 
        <div>{ name }</div>
        <div>{ date }</div>
      </div> 
      <div>
        <Checkbox checked={completed} />
      </div>
    </div>