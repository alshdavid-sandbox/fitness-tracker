import * as router from '~/platform/router';
import * as item from '~/platform/item';

const store = item.createStore()
const r = router.create()

r.use(router.React('#router-outlet'))

r.path('/', async (req, res) => {
    const { HomeView } = await import('~/interface/views/home')
    res.mount(HomeView(store))
})

r.load()