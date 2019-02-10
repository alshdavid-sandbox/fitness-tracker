import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
          path: '',
          redirectTo: 'login',
          pathMatch: 'full'
      },
      {
          path: 'login',
          loadChildren: './login/login.module#LoginModule'
      },
      {
          path: 'exercises',
          loadChildren: './exercises/exercises.module#ExercisesModule'
      },
      {
          path: 'body-weight',
          loadChildren: './body-weight/body-weight.module#BodyWeightModule'
      },
      {
          path: 'calories',
          loadChildren: './calories/calories.module#CaloriesModule'
      },
      {
          path: 'profile',
          loadChildren: './profile/profile.module#ProfileModule'
      }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
