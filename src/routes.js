import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import { HomePage } from './pages/home/home.page';
import { LiftsTrackerPage } from './pages/lists-tracker/lifts-tracker.page';
import { WeightTrackerPage } from './pages/weight-tracker/weight-tracker.page';
import { AddLiftPage } from './pages/add-lift/add-lift.page';

export const Routes = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/lifts" component={LiftsTrackerPage}/>
            <Route exact path="/weight" component={WeightTrackerPage}/>
            <Route exact path="/add-lift" component={AddLiftPage}/>
        </div>
    </BrowserRouter>
)
