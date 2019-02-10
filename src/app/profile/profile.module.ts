import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SharedModule } from '~shared'
import * as VIEWS from '~profile/views'

@NgModule({
  declarations: [
    VIEWS.ProfileRootViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: VIEWS.ProfileRootViewComponent
      }
    ])
  ]
})
export class ProfileModule { }
