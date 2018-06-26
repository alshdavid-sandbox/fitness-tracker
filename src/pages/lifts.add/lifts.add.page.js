import React, { Component } from 'react'
import { Navbar } from '../../components'
import './lifts.add.page.css'
import moment from 'moment'
import { Exercises } from '../../data/exercises.service'
import { paths } from '../../routes'

export class LiftsAddPage extends Component {
    constructor() {
        super()
        this.state = {
            date: moment().format('YYYY-MM-DD'),
            sets: [
                // { reps: '', weight: '' },
                // { reps: '', weight: '' },
                // { reps: '', weight: '' },
                // { reps: '', weight: '' }
            ],
            movement: ''
        }
    }

    addRep = (weight, reps) => {
        const newState = { ...this.state }
        newState.sets.push({
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
        newState.sets[index].reps = number
        this.setState(newState)
    }

    updateRepWeight = (index, number) => {
        const newState = { ...this.state }
        newState.sets[index].weight = number
        this.setState(newState)
    }

    updateMovement = (value) => {
        console.log(value)
        this.setState({ ...this.state, movement: value })
    }

    submit = _ => {
        Exercises.add({
            date: this.state.date,
            movement: this.state.movement,
            sets: this.state.sets
        })

        this.props.history.push('/lifts')
    }

    render() {
        return (
            <div className="app-page-add-lift">
                <Navbar 
                    left='<i class="fas fa-chevron-left"></i> Cancel' 
                    onClickLeft={_ => this.props.history.push(paths.lifts)}
                    center="Add Movement" 
                    right='Save'  
                    onClickRight={_ => this.submit()}
                />

                <main>
                    <label>Date</label>
                    <input 
                        type="date" 
                        value={this.state.date} 
                        onChange={e => this.updateDate(e.target.value)} />                    

                    <label>Movement Name</label>
                    <input
                        type="text" 
                        placeholder="Enter Movement" 
                        value={this.state.movement}
                        onChange={e => this.updateMovement(e.target.value)} />

                    <label>Sets</label>
                    {this.state.sets.map((set, index) => (
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
                
                </main>
            </div>
        )
    }
}
