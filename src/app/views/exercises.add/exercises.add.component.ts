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
        notes: '',
        tags: [],
        sets: [],
    }

    constructor(
        private ngRouter: Router
    ) {}

    addSet() {
        this.exercise.sets.push({ reps: undefined, weight: undefined })
    }

    addTag(v) {
        if (v) {
            this.exercise.tags.push(v)
        }
    }

    removeRep(i) {
        this.exercise.sets.splice(i, 1)
    }

    async search() {
        if (!this.exercise.movement) {
            this.suggestions = []
            return 
        }
        this.suggestions = await api.searchMovements(this.exercise.movement)
    }

    async selectSearch(value) {
        this.suggestions = []
        const exercises = await api.getExerciseByMovement(value)
        this.exercise = exercises[exercises.length - 1]
        this.exercise.notes = ''        
    }

    async submit() {
        let output = this.exercise
        if (!output.movement) {
            return
        }
        output.sets = output.sets.filter(({ reps, weight }) => reps || weight)
        await api.addExercise(output)

        this.ngRouter.navigate(['/exercises'])
    }
}
