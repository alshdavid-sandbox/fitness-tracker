import animate from 'crayon-animate'
import transition from 'crayon-transition'
import { useRouter, routerFunc } from '~/platform/crayon/use-router'

const homeTabs: routerFunc = (tabs, selector) => {
    console.log('render2')
    tabs.path('/workouts', (req, res) => res.redirect('/workouts/recent'))

    tabs.path('/workouts/**', 
        async (req, res) => {
            console.log('render3')
            const { Workouts } = await import('~/gui/workouts')
            return res.mount(Workouts())
    })

    tabs.path('/weights', async (req, res) => {
        const { Weights } = await import('~/gui/weights')
        return res.mount(Weights())
    })

    tabs.path('/calories', 
        async (req, res) => {
            const { Calories } = await import('~/gui/calories')
            return res.mount(Calories())
    })
}

export const useTabs = () => {
    const [ tabs, setTabs ] = useRouter('home-tabs', homeTabs)
    return { tabs, setTabs }
}