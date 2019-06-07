import animate from 'crayon-animate'
import transition from 'crayon-transition'
import { useRouter, routerFunc } from '~/platform/crayon/use-router'
import { NavbarAction, FabAction } from '~/gui/shared/components';

const homeTabs = (navbar: NavbarAction, fab: FabAction): routerFunc => 
    (tabs, selector) => {
    tabs.use(transition.loader(selector))
    tabs.use(animate.defaults({ duration: 300 }))
    tabs.use(animate.routes([
        { to:   '/workouts/recent', from: '/**', name: transition.slideRight },
        { from: '/workouts/recent', to:   '/**', name: transition.slideLeft },
        { to:   '/calories',        from: '/**', name: transition.slideLeft },
        { from: '/calories',        to:   '/**', name: transition.slideRight }
    ]))

    tabs.path('/workouts/**', async (req, res) => {
        const { Workouts } = await import('~/gui/workouts')
        return res.mount(Workouts(tabs, navbar, fab))
    })

    tabs.path('/weights', async (req, res) => {
        const { Weights } = await import('~/gui/weights')
        return res.mount(Weights(navbar, fab))
    })

    tabs.path('/calories', async (req, res) => {
        const { Calories } = await import('~/gui/calories')
        return res.mount(Calories(navbar, fab))
    })
}

export const useTabs = (navbar: NavbarAction, fab: FabAction) => {
    const [ tabs, setTabs ] = useRouter('home-tabs', homeTabs(navbar, fab))
    return { tabs, setTabs }
}