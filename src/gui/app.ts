import './app.scss'
import crayon from 'crayon';
import preact from 'crayon-preact';
// import * as database from '~/platform/database';
import * as exercise from '~/platform/exercise'
import * as views from '~/gui/views'

void async function main(){
    const database = await import('~/platform/database')
    const db = await database.connect()
    const exercises = exercise.createStore(db)
    const app = crayon.create()

    const target = document.getElementById('router-outlet')
    app.use(preact.router(target as HTMLElement))

    app.path('/', (req, res) => res.redirect('/exercises'))

    app.path('/exercises', (req, res) =>
        res.mount(views.ExercisesView(app, exercises))
    )

    app.path('/exercises/add', (req, res) =>
        res.mount(views.ExercisesAddView(app, exercises))
    )

    app.load()
}()