import './main.scss'
import crayon from 'crayon';
import preact from 'crayon-preact';
import animate from 'crayon-animate'
import transition from 'crayon-transition'
import { withContext } from '~/kit/with-context'
import * as Pages from '~/gui/pages'
import { animations } from '~/gui/animations';
import { AppContext, state } from '~/gui/context';
import Workout from '~/platform/workout'
import IndexedDB from '~/platform/database'

void async function main() {
  const db = await IndexedDB.connect()
  const workouts = new Workout.Store(db)
  const app = crayon.create()
  
  app.use(preact.router())   
  app.use(transition.loader())
  app.use(animate.defaults({ duration: 300 }))
  app.use(animate.routes(animations))
  app.use(withContext(AppContext, state))

  app.path('/', (req, res) => res.redirect('/workouts'))

  /* 
    This route contains a nested router for animation purposes
  */
  app.path('/**', (req, res) => 
    res.mount(Pages.Root))

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

  state.router = app
  state.workouts = workouts
  app.load()
}()