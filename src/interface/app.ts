import * as database from '~/platform/database';
import * as router from '~/platform/router';
import moment from 'moment'
;(window as any).moment = moment


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
        res.mount(view.HomeView(exercises))
        ;(window as any).exercises = exercises
    })

    app.load()
}()