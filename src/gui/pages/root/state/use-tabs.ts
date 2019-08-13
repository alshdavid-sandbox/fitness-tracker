import animate from 'crayon-animate'
import transition from 'crayon-transition'
import { useRouter, routerFunc } from '~/platform/use-router'
import { NavbarAction, FabAction } from '~/gui/components';
import * as Pages from '~/gui/pages';
import { tabAnimations } from '~/gui/animations';

export const useTabs = (navbar: NavbarAction, fab: FabAction) => {
  const [tabs, setTabs] = useRouter('home-tabs', (tabs, selector) => {
    tabs.use(transition.loader(selector))
    tabs.use(animate.defaults({ duration: 300 }))
    tabs.use(animate.routes(tabAnimations))

    tabs.path('/workouts/**', async (req, res) =>
      res.mount(Pages.Workouts(tabs, navbar, fab)))

    tabs.path('/weights', async (req, res) =>
      res.mount(Pages.Weights(navbar, fab)))

    tabs.path('/calories', async (req, res) =>
      res.mount(Pages.Calories(navbar, fab)))
  })
  return { tabs, setTabs }
}