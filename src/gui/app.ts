import './app.scss'
import * as database from '~/platform/database';
import * as router from '~/platform/router';

void async function main(){
    const db = await database.connect()
    const app = router.create()

    app.use(router.React('#router-outlet'))

    app.path('/', (req, res) => res.redirect('/exercises'))

    const [ 
        { exercisesRoutes }, 
        { bodyweightRoutes } 
    ] = await Promise.all([ 
        import('~/gui/exercises'),
        import('~/gui/bodyweights')
    ])

    exercisesRoutes(app, db)
    bodyweightRoutes(app, db)

    app.load()
}()