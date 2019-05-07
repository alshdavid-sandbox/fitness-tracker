import * as database from '~/platform/database';
import * as router from '~/platform/router';

void async function main(){
    const db = await database.connect()
    const app = router.create()

    app.use(router.React('#router-outlet'))

    app.path('/', (req, res) => res.redirect('/exercises'))

    await import('~/interface/exercises')
        .then(f => f.exercisesRoutes(app, db))

    app.load()
}()