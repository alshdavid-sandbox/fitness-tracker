import { Component } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment'
import { api, IBodyWeight } from '../../lib'
const timeFormat = 'YYYY-MM-DD'

@Component({
    selector: 'app-view-bodyweight-add',
    templateUrl: './bodyweight.add.component.html',
    styleUrls: ['./bodyweight.add.component.scss']
})
export class BodyweightAddViewComponent {
    public moment = moment
    public bodyweight: IBodyWeight = {
        date: moment().format(timeFormat),
        weight: ''
    }

    constructor(
        private ngRouter: Router
    ) {}

    async submit() {
        await api.addBodyweight(this.bodyweight)
        this.ngRouter.navigate(['/bodyweight'])
    }
}
