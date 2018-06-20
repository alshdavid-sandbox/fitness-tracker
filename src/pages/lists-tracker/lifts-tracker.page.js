import React, { Component } from 'react'
import {
    Navbar,
    Toolbar,
    ToolbarItem,
    FloatingActionBar,
    LiftsEntry,
    DateEntry
} from '../../components'
import moment from 'moment'

global.state = {}
const data = global.state

export class LiftsTrackerPage extends Component {
    render() {
        return (
            <div className="app-lifts-tracker">
                <Navbar left="Fitness Tracker" right="Lifts" />
                <Toolbar top={true}>
                    <ToolbarItem
                        text="Lifts"
                        onClick={() => this.props.history.push('/lifts')}
                    />
                    <ToolbarItem
                        text="Weight"
                        onClick={() => this.props.history.push('/weight')}
                    />
                </Toolbar>
                <FloatingActionBar
                    onClick={() => this.props.history.push('/add-lift')}
                    text="Add"
                />
                <section style={{marginBottom: '100px'}}>
                    {Object.keys(data).map(date => (
                        <div key={date}>
                            <DateEntry
                                date={moment(date).format('dddd DD MMM YY')}
                            />
                            {data[date].map((lift, key) => (
                                <LiftsEntry
                                    key={key}
                                    lift={lift.lift}
                                    lifts={lift.lifts}
                                    type={lift.type}
                                />
                            ))}
                        </div>
                    ))}
                </section>
            </div>
        )
    }
}

/*
'2018-05-24': [
    {
        id: 'date+index'
        type: 'chest',
        lift: 'Bench Press',
        lifts: [
            { weight: '70kg', reps: 6 },
            { weight: '70kg', reps: 6 },
            { weight: '70kg', reps: 5 },
            { weight: '70kg', reps: 5 }
        ]
    }
]
/*