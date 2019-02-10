import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SharedModule } from '~shared'
import * as VIEWS from '~calories/views'

@NgModule({
  declarations: [
    VIEWS.CaloriesListViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: VIEWS.CaloriesListViewComponent,
      }
    ])
  ]
})
export class CaloriesModule { }
