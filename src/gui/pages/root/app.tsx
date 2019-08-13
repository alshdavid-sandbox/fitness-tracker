import { h } from "preact"
import { Router, Request } from "crayon"
import {
  ToolbarItem,
  Navbar,
  Toolbar,
  useNavbar,
  useFab,
  Fab
} from "~/gui/components"
import { useSection, useTabs } from "./state"
import { Workout } from "~/platform/workout"
import "./app.scss"
import { useAppContext } from "~/gui/context";

export const App = () => {
  const { router } = useAppContext()
  const navbar = useNavbar()
  const fab = useFab()
  const { section } = useSection()
  const { setTabs } = useTabs(navbar, fab)

  return (
    <section className="component-root">
      <Navbar>
        {section}
        {navbar.action && navbar.action}
      </Navbar>
      <div className="tab-root" ref={setTabs}>
        {/* Tabs will be injected here */}
      </div>
      {fab.action && (
        <Fab
          onClick={() => {
            console.log(fab)
            fab.onClick()
          }}>
          {fab.action}
        </Fab>
      )}
      <Toolbar>
        <ToolbarItem
          icon="dumbbell"
          text="Workouts"
          isActive={section === "Workouts"}
          onClick={() => router.navigate("/workouts/recent")}
        />
        <ToolbarItem
          icon="weight"
          text="Weights"
          isActive={section === "Weights"}
          onClick={() => router.navigate("/weights")}
        />
        <ToolbarItem
          icon="cookie-bite"
          text="Calories"
          isActive={section === "Calories"}
          onClick={() => router.navigate("/calories")}
        />
      </Toolbar>
    </section>
  )
}
