import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import moment from 'moment'
import { api, IExercise } from '../../lib'

@Component({
    selector: 'app-view-exercises-edit',
    templateUrl: './exercises.edit.component.html',
    styleUrls: ['./exercises.edit.component.scss']
})
export class ExercisesEditViewComponent {
    public moment = moment
    public suggestions = []
    public exercise: IExercise = {
        id: '',
        date: '',
        movement: '',
        notes: '',
        tags: [],
        sets: [
            { reps: null, weight: null },
            { reps: null, weight: null },
            { reps: null, weight: null },
            { reps: null, weight: null }
        ],
    }

    get id() {
        return this.ngActivatedRoute.snapshot.params.id
    }

    constructor(
        private ngRouter: Router,
        private ngActivatedRoute: ActivatedRoute
    ) {}

    async ngOnInit() {
        this.exercise = await api.getExercise(this.id)
    }

    addTag(v) {
        if (v) {
            this.exercise.tags.push(v)
        }
    }

    addSet() {
        this.exercise.sets.push({ reps: undefined, weight: undefined })
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

    selectSearch(value) {
        this.suggestions = []
        this.exercise.movement = value
    }

    async submit() {
        await api.updateExercise(this.exercise)
        this.ngRouter.navigate(['/exercises', 'detail', this.exercise.id ])
    }

    async remove() {
        if (!confirm('Are you sure')) {
            return
        }
        await api.removeExerciseById(this.exercise.id)
        this.ngRouter.navigate(['/exercises'])
    }
}
