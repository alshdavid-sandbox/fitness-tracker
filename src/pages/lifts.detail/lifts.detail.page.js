import React, { Component } from 'react'
import { Navbar } from '../../components'
import { paths } from '../../routes'
import { api } from '../../services/api.service'
import moment from 'moment'
import Chart from 'chart.js'

export class LiftsDetailsPage extends Component {
    constructor() {
        super()
        this.state = {
            movement: {
                id: '',
                date: '',
                movement: '',
                sets: []
            }
        }
    }
    
    componentDidMount() {
        let id = this.props.match.params.id
        let movement = api.getExercise(id)
        this.setState({ ...this.state, movement })
        let labels = []
        let reps = []
        let weight = []
        for (let i in movement.sets) {
            labels.push(`Set ${parseInt(i, 10) + 1}`)
            reps.push(movement.sets[i].reps)
            weight.push(movement.sets[i].weight)
        }

        var myChart = new Chart(this.refs.myChart, {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Reps',
                        yAxisID: 'reps',
                        data: reps,
                        backgroundColor: "rgba(33, 150, 243,0.1)",
                        borderColor: 'rgb(33, 150, 243)',
                    },
                    {
                        label: 'Weight',
                        yAxisID: 'weight',
                        data: weight,
                        backgroundColor: "rgba(244, 67, 54,0.2)",
                        borderColor: 'rgb(244, 67, 54)'
                    }
                ]},
            options: {
                scales: {
                    yAxes: [
                        {
                            id: 'reps',
                            ticks: {
                                fontColor: "rgb(33, 150, 243)",
                                stacked: true,
                                beginAtZero:true,
                                scalePositionLeft: true,
                                max: Math.max.apply(null, reps) + 2
                            },
                        },
                        {
                            id: 'weight',
                            ticks: {
                                fontColor: "rgb(244, 67, 54)",
                                stacked: true,
                                beginAtZero:true,
                                scalePositionLeft: true,
                                max: Math.floor((Math.max.apply(null, weight) + 10) / 10)  * 10
                            },
                        },
                    ]
                }
            }
        });
    }
    render() {
        return (
            <div className="app-lifts-detail">
                <Navbar 
                    left='<i class="fas fa-chevron-left"></i> Back' 
                    onClickLeft={_ => this.props.history.push(paths.lifts)}
                    center="Detail" 
                    right='Save'  
                />
                <main style={{
                    padding: '0 3%',
                    textAlign: 'center',
                    fontWeight: '300'
                }}>
                    <h3>{this.state.movement.movement}</h3>
                    <h5>{moment(this.state.movement.date).format('dddd / DD MMMM')}</h5>
                    <canvas ref="myChart" width={window.innerWidth} height={window.innerHeight - 200}></canvas>
                </main>
            </div>
        )
    }
}
