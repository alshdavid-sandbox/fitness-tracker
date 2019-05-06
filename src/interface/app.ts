import * as database from '~/platform/database';
import * as router from '~/platform/router';
import * as axios from 'axios'

void async function main(){
    const db = await database.connect()
    const httpClient = axios.default.create()
    const app = router.create()
    
    app.use(router.React('#router-outlet'))
    
    app.path('/', async (req, res) => {
        const { HomeView } = await import('~/interface/views/home')
        res.mount(HomeView())
    })
    
    app.load()
}()