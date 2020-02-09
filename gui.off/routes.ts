import crayon from 'crayon';
import { WorkoutsPage } from '~/gui/pages'
import { WorkoutsAddPage } from '~/gui/pages'
import { WorkoutsAddNotesPage } from '~/gui/pages/workouts-add-notes/workouts-add-notes'
import { MeasurePage } from '~/gui/pages'
import { CaloriesPage } from '~/gui/pages'

const routes = new crayon.Group('')

routes.path('/', ctx => ctx.redirect('/workouts'))

routes.path('/workouts', ctx => ctx.mount(WorkoutsPage))
routes.path('/workouts/add', ctx => ctx.mount(WorkoutsAddPage))
routes.path('/workouts/add/notes', ctx => ctx.mount(WorkoutsAddNotesPage))


routes.path('/measure', ctx => ctx.mount(MeasurePage))
routes.path('/calories', ctx => ctx.mount(CaloriesPage))

export { routes }