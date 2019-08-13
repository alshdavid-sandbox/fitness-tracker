import './main.scss'
import crayon from 'crayon';
import preact from 'crayon-preact';
import animate from 'crayon-animate'
import transition from 'crayon-transition'
import workout from '~/platform/workout'
import { withContext } from '~/platform/with-context'
import * as Pages from '~/gui/pages'
import { App } from '~/gui/pages/root';
import { animations } from '~/gui/animations';
import { AppContext, context } from '~/gui/context';

const app = crayon.create()
context.router = app

app.use(preact.router())   
app.use(transition.loader())
app.use(animate.defaults({ duration: 300 }))
app.use(animate.routes(animations))
app.use(withContext(AppContext, context))

app.path('/', (req, res) => res.redirect('/workouts/recent'))

// This contains a nested router for animation purposes
app.path('/**', (req, res) => 
  res.mount(App))

app.path('/workouts/add', (req, res) =>
  res.mount(Pages.WorkoutsAdd))

app.path('/workouts/add/movement', (req, res) => 
  res.mount(Pages.WorkoutsAddMovement))

app.path('/workouts/add/tags', (req, res) => 
  res.mount(Pages.WorkoutsAddTags))

app.path('/workouts/add/notes', (req, res) => 
  res.mount(Pages.WorkoutsAddNotes))

app.path('/workouts/add/sets', (req, res) => 
  res.mount(Pages.WorkoutsAddSets))

app.load()

;(window as any).app = app