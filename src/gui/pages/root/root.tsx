import "./root.scss"
import { h } from "preact"
import animate from 'crayon-animate'
import transition from 'crayon-transition'
import * as UI from "~/gui/components"
import * as Tabs from '~/gui/pages/root/tabs';
import { useAppState } from "~/gui/context";
import { useSubscribe } from '~/kit/use-subscribe'
import { CrayonPreact } from '~/kit/embedded-router'
import { tabAnimations } from '~/gui/animations';
import { AppContext, state } from '~/gui/context';
import { withContext } from '~/kit/with-context';

const { ToolbarItem, Navbar, Toolbar, Fab } = UI
const { EmbeddedRouter } = CrayonPreact

export const Root = () => {
  const { router, navbarCtrl, fabCtrl } = useAppState()
  const navbar = useSubscribe(navbarCtrl)
  const fab = useSubscribe(fabCtrl)
  
  const navigate = (route: string) => {
    if (router.history.currentRoute === route) {
      return
    }
    fabCtrl.reset()
    navbarCtrl.reset()
    router.navigate(route)
  }

  return (
    <section className="component-root">
      <Navbar
        title={navbar.title} 
        icon={navbar.icon} 
        onClick={navbar.onClick} />
      <EmbeddedRouter name="tabs">
        {(tabsRouter, selector) => {
          tabsRouter.use(transition.loader(selector))
          tabsRouter.use(animate.defaults({ duration: 300 }))
          tabsRouter.use(animate.routes(tabAnimations))
          tabsRouter.use(withContext(AppContext, state))
      
          tabsRouter.path('/workouts', async (req, res) => 
            res.mount(Tabs.Workouts))
      
          tabsRouter.path('/weights', async (req, res) =>
            res.mount(Tabs.Weights))
      
          tabsRouter.path('/calories', async (req, res) =>
            res.mount(Tabs.Calories))
        }}
      </EmbeddedRouter>
      { fab.show && <Fab
          pulse={fab.pulse}
          onClick={fab.onClick}
          icon={fab.icon} 
          iconStyle={fab.iconStyle} /> }
      <Toolbar>
        <ToolbarItem
          icon="dumbbell"
          text="Workouts"
          isActive={window.location.pathname === "/workouts"}
          onClick={() => navigate("/workouts")}/>
        <ToolbarItem
          icon="weight"
          text="Measure"
          isActive={window.location.pathname === "/weights"}
          onClick={() => navigate("/weights")}/>
        <ToolbarItem
          icon="cookie-bite"
          text="Calories"
          isActive={window.location.pathname === "/calories"}
          onClick={() => navigate("/calories")}/>
      </Toolbar>
    </section>
  )
}
