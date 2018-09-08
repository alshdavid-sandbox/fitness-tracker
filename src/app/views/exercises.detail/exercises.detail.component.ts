import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { api, Exercise } from '../../lib'
import moment from 'moment'
import Chart from 'chart.js'

@Component({
    selector: 'app-view-exercises-detail',
    templateUrl: './exercises.detail.component.html',
    styleUrls: ['./exercises.detail.component.scss']
})
export class ExercisesDetailViewComponent {
    @ViewChild('chartOutlet')
    private chartOutlet

    @ViewChild('chartMacroOutlet')
    private chartMacroOutlet

    public moment = moment

    public exercise: Exercise = {
        id: '',
        date: '',
        movement: '',
        notes: '',
        tags: [],
        sets: []
    }

    get id() {
        return this.ngActivatedRoute.snapshot.params.id
    }

    constructor(
        private ngActivatedRoute: ActivatedRoute
    ) {}
    
    async ngOnInit() {
        await this.chartOutletInit()
        await this.chartMacroOutletInit()
    }

    async chartOutletInit() {
        let exercise = await api.getExercise(this.id)
        if (!exercise) {
            return
        }
        this.exercise = exercise

        let labels = []
        let reps = []
        let weight = []
        for (let i in exercise.sets) {
            labels.push(`Set ${parseInt(i, 10) + 1}`)
            reps.push(exercise.sets[i].reps)
            weight.push(exercise.sets[i].weight)
        }

        let chart = document.createElement('canvas')
        chart.height = window.innerHeight - 200
        chart.width = window.innerWidth

        this.chartOutlet.nativeElement.appendChild(chart)

        new Chart(chart, {
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
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [
                        {
                            id: 'reps',
                            position: 'right',
                            ticks: {
                                fontColor: "rgb(33, 150, 243)",
                                stacked: true,
                                beginAtZero:true,
                                scalePositionLeft: true,
                                max: Math.max.apply(null, reps) + 2
                            },
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
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
    
    getAverage(list, key) {
        return (list.reduce((a, b) => a + parseInt(b[key], 10), 0)) / list.length || null
    }

    async chartMacroOutletInit() {
        let exercises = await api.getExerciseByMovement(this.exercise.movement)
        exercises.sort((left, right) => moment(left.date).diff(moment(right.date)))
  
        let labels = []
        let averageReps = []
        let averageWeights = []

        for (let exercise of exercises) {
            let averageRep = this.getAverage(exercise.sets, 'reps')
            let averageWeight = this.getAverage(exercise.sets, 'weight')
            
            if (!averageRep || !averageWeight) {
                continue
            }
            
            labels.push(exercise.date)
            averageReps.push(averageRep)
            averageWeights.push(averageWeight)
        }

        let chart = document.createElement('canvas')
        chart.height = window.innerHeight - 200
        chart.width = window.innerWidth

        this.chartMacroOutlet.nativeElement.appendChild(chart)

        new Chart(chart, {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Reps',
                        yAxisID: 'reps',
                        data: averageReps,
                        backgroundColor: "rgba(33, 150, 243,0.1)",
                        borderColor: 'rgb(33, 150, 243)',
                    },
                    {
                        label: 'Weight',
                        yAxisID: 'weight',
                        data: averageWeights,
                        backgroundColor: "rgba(244, 67, 54,0.2)",
                        borderColor: 'rgb(244, 67, 54)'
                    }
                ]},
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [
                        {
                            id: 'reps',
                            position: 'right',
                            ticks: {
                                fontColor: "rgb(33, 150, 243)",
                                stacked: true,
                                beginAtZero:true,
                                scalePositionLeft: true,
                                max: Math.max.apply(null, averageReps) + 2
                            },
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        },
                        {
                            id: 'weight',
                            ticks: {
                                fontColor: "rgb(244, 67, 54)",
                                stacked: true,
                                beginAtZero:true,
                                scalePositionLeft: true,
                                max: Math.floor((Math.max.apply(null, averageWeights) + 10) / 10)  * 10
                            },
                        },
                    ]
                }
            }
        });
    }

}
