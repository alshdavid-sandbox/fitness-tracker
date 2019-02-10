import { Component } from '@angular/core'
import { toolbarItems } from '~shared/toolbar-items'
import { ToolbarItem } from '~shared/models'

@Component({
    selector: 'app-calories-list-view',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class CaloriesListViewComponent {
    public toolbarItems: ToolbarItem[] = toolbarItems
}

