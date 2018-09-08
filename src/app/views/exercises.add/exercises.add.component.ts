import { Component } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment'
import { api, Exercise } from '../../lib'
const timeFormat = 'YYYY-MM-DD'

@Component({
    selector: 'app-view-exercises-add',
    templateUrl: './exercises.add.component.html',
    styleUrls: ['./exercises.add.component.scss']
})
export class ExercisesAddViewComponent {
    public moment = moment
    public suggestions:string[] = []
    public exercise: Exercise = {
        date: moment().format(timeFormat),
        movement: '',
        sets: [
            { reps: null, weight: null },
            { reps: null, weight: null },
            { reps: null, weight: null },
            { reps: null, weight: null }
        ],
    }
    public accordionState = {
        date: false,
        movement: true,
        sets: false
    }

    constructor(
        private ngRouter: Router
    ) {}

    addRep() {
        this.exercise.sets.push({ reps: undefined, weight: undefined })
    }

    removeRep(i) {
        this.exercise.sets.splice(i, 1)
    }

    openTab(tab) {
        let state = this.accordionState[tab]

        Object.keys(this.accordionState)
            .forEach(i => this.accordionState[i] = false)

        this.accordionState[tab] = !state
    }

    async search() {
        if (!this.exercise.movement) {
            this.suggestions = []
            return 
        }
        this.suggestions = await api.searchMovements(this.exercise.movement.toLocaleLowerCase())
        console.log(this.suggestions)
    }

    selectSearch(value) {
        this.suggestions = []
        this.exercise.movement = value
    }

    async submit() {
        let output = this.exercise
        if (!output.movement) {
            return
        }
        output.sets = output.sets.filter(({ reps, weight }) => reps || weight)
        console.log(output)
        await api.addExercise(output)

        this.ngRouter.navigate(['/exercises'])
    }
}
