import * as database from '~/platform/database';
import * as router from '~/platform/router';
import Dexie from 'dexie';

export const exercisesRoutes = (app: router.Router, db: Dexie) => {

    app.path('/exercises', async (req, res) => {
        const [ exercise, view ] = await Promise.all([
            import('~/platform/exercise'),
            import('~/interface/views/exercises')
        ])
        const exercises = exercise.createStore(db)
        res.mount(view.ExercisesView(app, exercises))
        ;(window as any).exercises = exercises
    })

    app.path('/exercises/add', async (req, res) => {
        const [ exercise, view ] = await Promise.all([
            import('~/platform/exercise'),
            import('~/interface/views/exercises-add')
        ])
        const exercises = exercise.createStore(db)
        res.mount(view.ExercisesAddView(app))
        ;(window as any).exercises = exercises
    })

}