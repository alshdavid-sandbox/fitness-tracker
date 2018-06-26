import React, { Component } from 'react';
import { Toolbar } from '../toolbar/toolbar.component'
import { ToolbarItem } from '../toolbar-item/toolbar-item.component'
import { paths } from '../../routes'
export class ToolbarComplete extends Component {
    toolbarItems = [
        {
            icon: 'fa-dumbbell',
            text: 'Movements',
            route: paths.lifts
        },
        {
            icon: 'fa-weight',
            text: 'Body Weight',
            route: paths.weight
        },
        {
            icon: 'fa-battery-half',
            text: 'Calories',
            route: paths.calories
        },
        {
            icon: 'fa-star',
            text: 'Rate',
            route: paths.rate
        }
    ]

    render() {
      return (
        <Toolbar>
            {
                this.toolbarItems.map((item, key) => <ToolbarItem
                    key={key}
                    icon={item.icon}
                    text={item.text}
                    route={item.route}
                    onClick={() => this.props.changeRoute(item.route)}
                />)
            }
        </Toolbar>
      );
    }
}