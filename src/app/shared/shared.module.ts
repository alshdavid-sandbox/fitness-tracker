import { NgModule, ModuleWithProviders } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import * as COMPONENTS from '~shared/components'
import * as SERVICES from '~shared/services'

@NgModule({
  declarations: [
    COMPONENTS.NavbarComponent,
    COMPONENTS.ToolbarComponent,
    COMPONENTS.SearchbarComponent,
    COMPONENTS.IconComponent,
    COMPONENTS.DateComponent,
    COMPONENTS.ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    COMPONENTS.NavbarComponent,
    COMPONENTS.ToolbarComponent,
    COMPONENTS.SearchbarComponent,
    COMPONENTS.IconComponent,
    COMPONENTS.DateComponent,
    COMPONENTS.ButtonComponent
  ]
})
export class SharedModule {
  forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        SERVICES.DatabaseService
      ]
    }
  }
}
