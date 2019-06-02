import './app.scss'
import crayon from 'crayon';
import preact from 'crayon-preact';

void async function main(){
    const app = crayon.create()

    const target = document.getElementById('router-outlet')
    app.use(preact.router(target as HTMLElement))

    app.path('/', (req, res) => res.redirect('/workouts'))

    app.path('/:section', async (req, res) => {
        const { Root } = await import('./root')
        return res.mount(Root(req, app))
    })

    app.load()
}()