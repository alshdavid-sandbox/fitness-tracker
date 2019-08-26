import { h } from "preact"
import {
  ToolbarItem,
  Navbar,
  Toolbar,
  Fab,
  NavbarController
} from "~/gui/components"
import { useSection, useTabs, useFab } from "./state"
import "./root.scss"
import { useAppState } from "~/gui/context";
import { useState, useMemo, useEffect } from "preact/hooks";
import { useSubscribe } from '~/kit/use-subscribe'
import { Request } from 'crayon'

export const Root = () => {
  const { router, navbarCtrl, fabCtrl } = useAppState()
  const navbar = useSubscribe(navbarCtrl.state)
  const fab = useSubscribe(fabCtrl.state)
  const { setTabsElement } = useTabs()
  
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
      
      <div 
        className="tab-root"
        ref={setTabsElement} />
        { fab.show && 
        <Fab
          onClick={fab.onClick}
          icon={fab.icon} 
          iconStyle={fab.iconStyle} /> }
      <Toolbar>
        <ToolbarItem
          icon="dumbbell"
          text="Workouts"
          isActive={window.location.pathname === "/workouts/recent"}
          onClick={() => navigate("/workouts/recent")}/>
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
