// Angular Core
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';

import { VIEWS } from './views'
import { COMPONENTS } from './components'
import { DIRECTIVES } from './directives'


@NgModule({
  declarations: [
    AppComponent,
    ...VIEWS,
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutes
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
