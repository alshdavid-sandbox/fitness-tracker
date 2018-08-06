import { Component } from '@angular/core';
import { toolbarItems } from '../../lib';

@Component({
    selector: 'app-view-calories',
    templateUrl: './calories.component.html',
    styleUrls: ['./calories.component.scss']
})
export class CaloriesViewComponent {
    public toolbarItems = toolbarItems


}
