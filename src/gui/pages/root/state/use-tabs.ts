import animate from 'crayon-animate'
import transition from 'crayon-transition'
import { useRouter, routerFunc } from '~/kit/use-router'
// import { NavbarAction } from '~/gui/components';
import * as Tabs from '~/gui/pages/root/tabs';
import { tabAnimations } from '~/gui/animations';
import { AppContext, state } from '~/gui/context';
import { withContext } from '~/kit/with-context';

export const useTabs = () => {
  const [ tabs, setTabsElement ] = useRouter((tabs, selector) => {
    tabs.use(transition.loader(selector))
    tabs.use(animate.defaults({ duration: 300 }))
    tabs.use(animate.routes(tabAnimations))
    tabs.use(withContext(AppContext, state))

    tabs.path('/workouts/**', async (req, res) => {
      return res.mount(Tabs.Workouts)
    })

    tabs.path('/weights', async (req, res) =>
      res.mount(Tabs.Weights))

    tabs.path('/calories', async (req, res) =>
      res.mount(Tabs.Calories))
  })
  return { tabs, setTabsElement }
}