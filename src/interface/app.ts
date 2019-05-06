import * as database from '~/platform/database';
import * as router from '~/platform/router';

void async function main(){
    const db = await database.connect()
    const app = router.create()
    
    app.use(router.React('#router-outlet'))
    
    app.path('/', async (req, res) => {
        const [exercise, view] = await Promise.all([
            import('~/platform/exercise'),
            import('~/interface/views/home')
        ])
        const exercises = exercise.init(db)
        res.mount(view.HomeView(exercises))
        ;(window as any).exercises = exercises 
    })
    
    app.load()
}()