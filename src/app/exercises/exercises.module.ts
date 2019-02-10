import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SharedModule } from '~shared'
import { FormsModule } from '@angular/forms'
import { DatabaseService } from '~shared/services'
import * as VIEWS from '~exercises/views'
import * as COMPONENTS from '~exercises/components'

@NgModule({
  declarations: [
    VIEWS.ExercisesListViewComponent,
    VIEWS.ExercisesAddViewComponent,
    COMPONENTS.ListDateComponent,
    COMPONENTS.ListItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: VIEWS.ExercisesListViewComponent,
      },
      {
        path: 'add',
        component: VIEWS.ExercisesAddViewComponent,
      }
    ])
  ],
  providers: [
    DatabaseService
  ]
})
export class ExercisesModule { }
