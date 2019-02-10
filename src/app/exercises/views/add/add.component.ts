import { Component } from '@angular/core'
import * as moment from 'moment'
import { Exercise, Set } from '~shared/models'
import { DatabaseService } from '~shared/services';

export interface IExercise {
    id?: string
    date: string
    movement: string
    sets: Set[]
    tags: string[]
    notes: string
}

@Component({
    selector: 'app-exercises-add-view',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class ExercisesAddViewComponent {
    public suggestions: Exercise[] = []
    public sets: Set[] = []
    public tags: string[] = []
    public notes = ''
    public movement = ''
    public date = moment().format('YYYY-MM-DD')

    constructor(
        public databaseService: DatabaseService
    ) {}

    async searchMovement() {
        if (!this.movement) {
            this.suggestions = []
            return
        }
        this.suggestions = await this.databaseService
            .searchExercises(this.movement)
    }

    async selectSearch(value) {
        this.suggestions = []
        this.movement = value.name
        this.tags = value.tags
    }

    addSetItem() {
        const defaultReps = this.sets[0] && this.sets[0].reps
        const defaultweight = this.sets[0] && this.sets[0].weight
        this.sets.push(new Set(defaultReps, defaultweight))
    }

    removeSetItem(index: number) {
        this.sets = this.sets.filter((s, i) => i !== index)
    }

    submit() {
        const payload = {
            date: this.date,
            movement: this.movement,
            notes: this.notes,
            tags: this.tags,
            sets: this.sets,
        }
        console.log(payload)
    }
}

