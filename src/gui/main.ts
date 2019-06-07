import './main.scss'
import crayon from 'crayon';
import preact from 'crayon-preact';
import animate from 'crayon-animate'
import transition from 'crayon-transition'
import { init as initApm } from '@elastic/apm-rum'

var apm = initApm({
    serviceName: 'fitness-tracker',
    serverUrl: 'http://13.211.123.204:8200',
    serviceVersion: '1'
  })
console.log(apm)
void async function main(){
    const app = crayon.create()

    app.use(preact.router())
    app.use(transition.loader())
    app.use(animate.defaults({
        duration: 500
    }))

    app.path('/', (req, res) => res.redirect('/workouts/recent'))

    app.path('/**', async (req, res) => {
        const { App } = await import('~/gui/app')
        return res.mount(App(req, app))
    })

    app.path('/workouts/add', 
        animate.route([
            { from: '/**', name: transition.pushUp  },
            { to:   '/**', name: transition.popDown }
        ]), async (req, res) => {
            const { WorkoutsAdd } = await import('~/gui/workouts/workouts-add/workouts-add')     
            return res.mount(WorkoutsAdd(app))
        })

    app.load()

    ;(window as any).app = app
}()