import React, { Component } from 'react'
import { api } from '../../services/api.service'
import {
    Navbar,
    ToolbarComplete,
    LiftsEntry,
    DateEntry
} from '../../components'
import moment from 'moment'
import { paths } from '../../routes'

global.state = {}
let data = api.getExercises()

export class LiftsPage extends Component {
    componentDidMount(){
        setTimeout(_ => {
            data = api.getExercises()
            this.forceUpdate()
        })
    }
    render() {
        return (
            <div className="app-lifts-tracker">
                <Navbar 
                    left='<i class="fas fa-bars"></i>' 
                    center="Movements" 
                    right='<i class="fas fa-plus"></i>' 
                    onClickRight={_ => this.props.history.push(paths.lifts_add)}    
                />
                {Object.keys(data).reverse().map(date => (
                    <div key={date}>
                        <DateEntry
                            date={moment(date).format('dddd / DD MMMM')}
                        />
                        <div> 
                            {data[date].map((lift, key) => (
                                <LiftsEntry
                                    key={key}
                                    movement={lift.movement}
                                    sets={lift.sets}
                                    onClick={_ => this.props.history.push(paths.lifts_id + lift.id)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
                <ToolbarComplete changeRoute={route => this.props.history.push(route)} />
            </div>
        )
    }
}

/*
'2018-05-24': [
    {
        id: 'date+index'
        type: 'chest',
        movement: 'Bench Press',
        sets: [
            { weight: '70kg', reps: 6 },
            { weight: '70kg', reps: 6 },
            { weight: '70kg', reps: 5 },
            { weight: '70kg', reps: 5 }
        ]
    }
]
*/