import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import moment from 'moment'
import { api, IBodyWeight } from '../../lib'
const timeFormat = 'YYYY-MM-DD'

@Component({
    selector: 'app-view-bodyweight-edit',
    templateUrl: './bodyweight.edit.component.html',
    styleUrls: ['./bodyweight.edit.component.scss']
})
export class BodyweightEditViewComponent {
    public moment = moment
    public bodyweight: IBodyWeight = {
        date: moment().format(timeFormat),
        weight: ''
    }

    public get id() {
        return this.ngActivatedRoute.snapshot.params.id
    }

    constructor(
        private ngRouter: Router,
        private ngActivatedRoute: ActivatedRoute
    ) {}

    async ngOnInit() {
        this.bodyweight = await api.getBodyweight(this.id)
        console.log(this.bodyweight)
    }

    async submit() {
        await api.updateBodyweight(this.bodyweight)
        this.ngRouter.navigate(['/bodyweight'])
    }

    async remove() {
        if (!confirm('Are you sure you want to delete this?')) {
            return
        }
        await api.removeBodyweight(this.id)
        this.ngRouter.navigate(['/bodyweight'])
    }
}
