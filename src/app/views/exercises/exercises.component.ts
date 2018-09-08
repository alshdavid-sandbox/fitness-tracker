import moment from 'moment'
import { Component } from '@angular/core';
import { api, toolbarItems, scrollToLastLocation } from '../../lib';

@Component({
    selector: 'app-view-exercises',
    templateUrl: './exercises.component.html',
    styleUrls: ['./exercises.component.scss']
})
export class ExercisesViewComponent {
    public toolbarItems = toolbarItems
    public Object = Object
    public moment = moment
    public items = {}


    async ngOnInit() {
        let exercises = await api.getExercises()
        
        
        for (let exercise of exercises) {
            if (!this.items[exercise.date]) {
                this.items[exercise.date] = []
            }
            this.items[exercise.date].push(exercise)
        }
    }

    ngAfterViewInit() {
        scrollToLastLocation('/exercises')
    }

    getAverage(list, key) {
        return (list.reduce((a, b) => a + parseInt(b[key], 10), 0)) / list.length
    }

}
