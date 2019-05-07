import * as database from '~/platform/database';
import * as router from '~/platform/router';

void async function main(){
    const db = await database.connect()
    const app = router.create()

    app.use(router.React('#router-outlet'))

    app.path('/', (req, res) => res.redirect('/exercises'))

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

    app.load()
}()