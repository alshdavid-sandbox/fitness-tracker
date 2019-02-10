import { Component } from '@angular/core'
import { toolbarItems } from '~shared/toolbar-items'
import { ToolbarItem } from '~shared/models'

@Component({
    selector: 'app-body-weight-list-view',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class BodyWeightListViewComponent {
    public toolbarItems: ToolbarItem[] = toolbarItems
}

