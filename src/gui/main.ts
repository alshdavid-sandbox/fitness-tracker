import './main.scss'
import crayon from 'crayon';
import preact from 'crayon-preact';
import animate from 'crayon-animate'
import transition from 'crayon-transition'

void async function main(){
    const app = crayon.create()

    const target = document.getElementById('router-outlet')
    app.use(preact.router(target as HTMLElement))

    // app.path('/', (req, res) => res.redirect('/workouts'))

    app.path('/:section/**', async (req, res) => {
        console.log('render')
        const { App } = await import('~/gui/app')
        return res.mount(App(req, app))
    })

    app.path('/workouts/add', async (req, res) => {
        const { WorkoutsAdd } = await import('~/gui/workouts/workouts-add/workouts-add')
        return res.mount(WorkoutsAdd())
    })

    app.load()

    ;(window as any).app = app
}()