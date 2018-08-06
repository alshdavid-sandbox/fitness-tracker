import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import moment from 'moment'
import { api } from '../../lib'
const timeFormat = 'YYYY-MM-DD'

@Component({
    selector: 'app-view-exercises-edit',
    templateUrl: './exercises.edit.component.html',
    styleUrls: ['./exercises.edit.component.scss']
})
export class ExercisesEditViewComponent {
    public moment = moment
    public suggestions = []
    public exercise = {
        id: '',
        date: '',
        movement: '',
        sets: [
            { reps: '', weight: '' },
            { reps: '', weight: '' },
            { reps: '', weight: '' },
            { reps: '', weight: '' }
        ],
    }
    public accordionState = {
        date: false,
        movement: true,
        sets: false
    }

    constructor(
        private ngRouter: Router,
        private ngActivatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        let id = this.ngActivatedRoute.snapshot.params.id
        this.exercise = api.getExercise(id)
    }

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

    search() {
        if (!this.exercise.movement) {
            this.suggestions = []
            return 
        }
        this.suggestions = api.searchMovements(this.exercise.movement.toLocaleLowerCase())
    }

    selectSearch(value) {
        this.suggestions = []
        this.exercise.movement = value
    }

    submit() {
        let output = this.exercise
        if (!output.movement) {
            return
        }
        output.sets = output.sets.filter(({ reps, weight }) => reps || weight)
        
        api.updateExercise(output)

        this.ngRouter.navigate(['/exercises', 'detail', this.exercise.id ])
    }

    remove() {
        if (!confirm('Are you sure')) {
            return
        }
        api.removeExerciseById(this.exercise.id)
        this.ngRouter.navigate(['/exercises'])
    }
}
