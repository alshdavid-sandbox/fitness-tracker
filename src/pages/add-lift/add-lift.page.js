import React, { Component } from 'react'
import { Navbar } from '../../components'
import './add-lift.page.css'
import moment from 'moment'
import * as stateService from '../../services/state.service'

const createRep = (weight, reps) => ({
    weight,
    reps
})

export class AddLiftPage extends Component {
    constructor() {
        super()
        this.state = {
            date: moment().format('YYYY-MM-DD'),
            reps: [],
            type: undefined,
            lift: ''
        }
    }

    addRep = (weight, reps) => {
        const newState = { ...this.state }
        newState.reps.push({
            weight,
            reps
        })
        this.setState(newState)
    }

    updateDate = (date) => {
        const newState = { ...this.state }
        newState.date = date
        this.setState(newState)
    }

    updateRepRep = (index, number) => {
        const newState = { ...this.state }
        newState.reps[index].reps = number
        this.setState(newState)
    }

    updateRepWeight = (index, number) => {
        const newState = { ...this.state }
        newState.reps[index].weight = number
        this.setState(newState)
    }

    submit = (e) => {
        e.preventDefault()
        console.log(this.state)
        stateService.addLift({
            date: this.state.date,
            lift: this.state.lift,
            lifts: this.state.reps,
            type: this.state.type
        })
    }

    render() {
        return (
            <div className="app-page-add-lift">
                <Navbar left="Fitness Tracker" right="Add Lift" />

                <form onSubmit={(e) => this.submit(e)}>
                    <input 
                        type="date" 
                        value={this.state.date} 
                        onChange={e => this.updateDate(e.target.value)} />
                    <br />
                    <select>
                        <option selected="selected" disabled>Type</option>
                    </select>
                    <br />
                    <input
                        type="text" 
                        placeholder="Lift" />
                    <div className="reps-container">
                        {this.state.reps.map((rep, index) => (
                            <div className="reps" key={index}>
                                <input 
                                    onInput={(e) => this.updateRepRep(index, e.target.value)}
                                    placeholder="Reps" 
                                    type="number" />
                                <input 
                                    onInput={(e) => this.updateRepWeight(index, e.target.value)}
                                    placeholder="Weight" 
                                    type="number" />
                            </div>
                        ))}
                        <button
                            onClick={() => this.addRep()}
                            type="button"
                            className="add-rep"
                        >
                            Add Set
                        </button>
                    </div>
                    <button className="submit">Add Lift</button>
                </form>
            </div>
        )
    }
}
