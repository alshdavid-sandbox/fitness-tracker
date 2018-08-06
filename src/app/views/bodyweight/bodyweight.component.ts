import { Component } from '@angular/core';
import { toolbarItems } from '../../lib';

@Component({
    selector: 'app-view-bodyweight',
    templateUrl: './bodyweight.component.html',
    styleUrls: ['./bodyweight.component.scss']
})
export class BodyweightViewComponent {
    public toolbarItems = toolbarItems


}
