import { Component } from '@angular/core'
import { toolbarItems } from '~shared/toolbar-items'
import { ToolbarItem } from '~shared/models'

@Component({
    selector: 'app-profile-root-view',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss']
})
export class ProfileRootViewComponent {
    public toolbarItems: ToolbarItem[] = toolbarItems
}

