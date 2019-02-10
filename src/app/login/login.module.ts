import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import * as VIEWS from '~login/views'

@NgModule({
  declarations: [
    VIEWS.LoginViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: VIEWS.LoginViewComponent,
      }
    ])
  ]
})
export class LoginModule { }
