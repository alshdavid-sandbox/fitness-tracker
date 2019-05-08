import './app.scss'
import * as database from '~/platform/database';
import * as express from 'express-browser';
import * as exercise from '~/platform/exercise'
import * as views from '~/gui/views'

void async function main(){
    const db = await database.connect()
    const exercises = exercise.createStore(db)
    const app = express.create()

    app.use(express.React('#router-outlet'))

    app.path('/', (req, res) => res.redirect('/exercises'))

    app.path('/exercises', (req, res) =>
        res.mount(views.ExercisesView(app, exercises))
    )

    app.path('/exercises/add', (req, res) =>
        res.mount(views.ExercisesAddView(app, exercises))
    )

    app.load()
}()