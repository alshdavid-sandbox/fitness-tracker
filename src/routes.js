import React from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'

import { 
    HomePage,
    LiftsPage,
    LiftsDetailsPage,
    LiftsAddPage,
    WeightPage
    
} from './pages'

export const paths = {
    'lifts': '/lifts',
    'lifts_id': '/lifts/detail/',
    'lifts_add': '/lifts/add',
    'weight': '/weight',
    'calories': '/calories',
    'rate': '/rate',
}

const AppRoutes = () => (<div>
    <Route exact path="/" component={HomePage}/>

    <Route exact path={paths.lifts} component={LiftsPage}/>
    <Route exact path={paths.lifts_add} component={LiftsAddPage}/>
    <Route exact path={paths.lifts_id + ':id'} component={LiftsDetailsPage}/>

    <Route exact path={paths.weight} component={WeightPage}/>
    <Route exact path={paths.calories} component={WeightPage}/>
    <Route exact path={paths.rate} component={WeightPage}/>
</div>)

export const Routes = () => 
    window.matchMedia('(display-mode: standalone)').matches 
        ? (<HashRouter><AppRoutes /></HashRouter>)
        : (<BrowserRouter><AppRoutes /></BrowserRouter>)

