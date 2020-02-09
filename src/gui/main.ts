import './main.scss'
import crayon from 'crayon';
import crayonPreact from 'crayon-preact';
import * as Pages from '~/gui/pages'
import services from '~/gui/services';

void async function main() {
  const app = crayon.create()
  services.provide('router', app)
  
  app.use(crayonPreact.router(document.getElementById('outlet')!))
  app.use(services.middleware)

  app.path('/', ctx => ctx.redirect('/workouts'))

  app.path('/workouts', ctx => ctx.mount(Pages.WorkoutsPage))
  app.path('/measure', ctx => ctx.mount(Pages.MeasurePage))
  app.path('/calories', ctx => ctx.mount(Pages.CaloriesPage))

  app.load()
}()