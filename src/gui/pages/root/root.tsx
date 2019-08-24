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
import { useAppContext } from "~/gui/context";
import { useState, useMemo, useEffect } from "preact/hooks";
import { useSubscribe } from '~/platform/use-subscribe'

export const Root = () => {
  const { router, navbarCtrl, fabCtrl } = useAppContext()
  const navbar = useSubscribe(navbarCtrl.state)
  const fab = useSubscribe(fabCtrl.state)
  const { setTabsElement } = useTabs()

  const navigate = (route: string) => {
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
          onClick={() => navigate("/workouts/recent")}/>
        <ToolbarItem
          icon="weight"
          text="Measure"
          onClick={() => navigate("/weights")}/>
        <ToolbarItem
          icon="cookie-bite"
          text="Calories"
          onClick={() => navigate("/calories")}/>
      </Toolbar>
    </section>
  )
}
