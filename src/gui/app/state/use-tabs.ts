import animate from 'crayon-animate'
import transition from 'crayon-transition'
import { useRouter, routerFunc } from '~/platform/crayon/use-router'

const homeTabs: routerFunc = (tabs, selector) => {
    tabs.use(transition.loader(selector))
    tabs.use(animate.defaults({ duration: 300 }))

    tabs.path('/workouts', 
        animate.route([
            { from: '/**', name: transition.slideRight },
            { to:   '/**', name: transition.slideLeft }
        ]),
        async (req, res) => {
            const { Workouts } = await import('~/gui/workouts')
            return res.mount(Workouts())
    })

    tabs.path('/weights', async (req, res) => {
        const { Weights } = await import('~/gui/weights')
        return res.mount(Weights())
    })

    tabs.path('/calories', 
        animate.route([
            { from: '/**', name: transition.slideLeft },
            { to:   '/**', name: transition.slideRight }
        ]),
        async (req, res) => {
            const { Calories } = await import('~/gui/calories')
            return res.mount(Calories())
    })

    tabs.path('/**', (req, res) => res.redirect('/workouts'))
}

export const useTabs = () => {
    const [ tabs, setTabs ] = useRouter('home-tabs', homeTabs)
    return { tabs, setTabs }
}