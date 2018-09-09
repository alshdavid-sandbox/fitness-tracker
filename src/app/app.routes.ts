import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisesViewComponent } from './views/exercises/exercises.component'
import { ExercisesAddViewComponent } from './views/exercises.add/exercises.add.component'
import { ExercisesEditViewComponent } from './views/exercises.edit/exercises.edit.component'
import { ExercisesDetailViewComponent } from './views/exercises.detail/exercises.detail.component'
import { BodyweightViewComponent } from './views/bodyweight/bodyweight.component'
import { SettingsViewComponent } from './views/settings/settings.component'
import { CaloriesViewComponent } from './views/calories/calories.component'
import { BodyweightAddViewComponent } from './views/bodyweight.add/bodyweight.add.component';
import { BodyweightEditViewComponent } from './views/bodyweight.edit/bodyweight.edit.component';


export const routes: Routes = [
    { path: '', redirectTo: 'exercises', pathMatch: 'full' },

    { path: 'exercises',                component: ExercisesViewComponent },
    { path: 'exercises/add',            component: ExercisesAddViewComponent },
    { path: 'exercises/detail/:id',     component: ExercisesDetailViewComponent },
    { path: 'exercises/edit/:id',       component: ExercisesEditViewComponent },
    
    { path: 'bodyweight',               component: BodyweightViewComponent },
    { path: 'bodyweight/add',           component: BodyweightAddViewComponent },
    { path: 'bodyweight/edit/:id',      component: BodyweightEditViewComponent },

    { path: 'calories',                 component: CaloriesViewComponent },
    { path: 'settings',                 component: SettingsViewComponent },
    
    { path: '**', redirectTo: 'exercises', pathMatch: 'full' },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);