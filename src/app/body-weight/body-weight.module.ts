import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SharedModule } from '~shared'
import * as VIEWS from '~bodyWeight/views'

@NgModule({
  declarations: [
    VIEWS.BodyWeightListViewComponent
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
        component: VIEWS.BodyWeightListViewComponent,
      }
    ])
  ]
})
export class BodyWeightModule { }
