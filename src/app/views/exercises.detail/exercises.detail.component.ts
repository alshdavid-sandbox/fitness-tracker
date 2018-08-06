import { Component, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router'
import { api } from '../../lib'
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

    public exercise = {
        id: '',
        date: '',
        movement: '',
        sets: []
    }

    constructor(
        // private ngActivatedRouteSnapshot: ActivatedRouteSnapshot,
        private ngActivatedRoute: ActivatedRoute
    ) {}
    
    ngOnInit() {
        console.log(this.ngActivatedRoute.snapshot.params.id)

        this.chartOutletInit()
        this.chartMacroOutletInit()
    }

    chartOutletInit() {
        let id = this.ngActivatedRoute.snapshot.params.id
        let exercise = api.getExercise(id)
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
    
    getAverage(list, key) {
        return (list.reduce((a, b) => a + parseInt(b[key], 10), 0)) / list.length
    }

    chartMacroOutletInit() {
        let exercises = api.getExerciseByMovement(this.exercise.movement)
        exercises.sort((left, right) => moment(left.date).diff(moment(right.date)))
  
        let labels = []
        let averageReps = []
        let averageWeights = []

        for (let exercise of exercises) {
            labels.push(exercise.date)
            // console.log(exercise)
            let averageRep = this.getAverage(exercise.sets, 'reps')
            let averageWeight = this.getAverage(exercise.sets, 'weight')
            
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
                scales: {
                    yAxes: [
                        {
                            id: 'reps',
                            ticks: {
                                fontColor: "rgb(33, 150, 243)",
                                stacked: true,
                                beginAtZero:true,
                                scalePositionLeft: true,
                                max: Math.max.apply(null, averageReps) + 2
                            },
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
