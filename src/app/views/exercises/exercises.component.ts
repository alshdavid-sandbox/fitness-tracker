import moment from 'moment'
import { Component } from '@angular/core';
import { api, toolbarItems, scrollToLastLocation, Exercise, generateAverageString } from '../../lib';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-view-exercises',
    templateUrl: './exercises.component.html',
    styleUrls: ['./exercises.component.scss']
})
export class ExercisesViewComponent {
    public toolbarItems = toolbarItems
    public generateAverageString = generateAverageString
    public Object = Object
    public moment = moment
    public filter = new Subject()
    public items = {}


    async ngOnInit() {
        this.processList(await api.getExercises())        

        this.filter
            .pipe(debounceTime(250))
            .subscribe(async value => this.processList(await api.getExerciseByMovement(value)))
    }

    ngAfterViewInit() {
        scrollToLastLocation('/exercises')
    }

    processList(exercises: Exercise[]) {
        this.items = {}
        for (let exercise of exercises) {
            if (!this.items[exercise.date]) {
                this.items[exercise.date] = []
            }
            this.items[exercise.date].push(exercise)
        }
    }

    getAverage(list, key) {
        return (list.reduce((a, b) => a + parseInt(b[key], 10), 0)) / list.length
    }
}
