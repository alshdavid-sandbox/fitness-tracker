import * as router from '~/platform/router';
import Dexie from 'dexie';

export const exercisesRoutes = (app: router.Router, db: Dexie) => {

    app.path('/exercises', async (req, res) => {
        const [ exercise, view ] = await Promise.all([
            import('~/platform/exercise'),
            import('~/gui/exercises/views/exercises')
        ])
        const exercises = exercise.createStore(db)
        res.mount(view.ExercisesView(app, exercises))
    })

    app.path('/exercises/add', async (req, res) => {
        const [ exercise, view ] = await Promise.all([
            import('~/platform/exercise'),
            import('~/gui/exercises/views/exercises-add')
        ])
        const exercises = exercise.createStore(db)
        res.mount(view.ExercisesAddView(app, exercises))
    })

}