import "./calories.scss"
import { h } from "preact"
import { Navbar, Toolbar, ToolbarItem } from '~/gui/components'
import { useService } from '~/gui/services'

export const CaloriesPage = () => {
  const { router } = useService()

  return <div>
    <Navbar
      title="Calories"
      icon="plus"
      onClick={() => alert('add')} />


    <Toolbar>
      <ToolbarItem
        icon="dumbbell"
        text="Workouts"
        isActive={window.location.pathname === "/workouts"}
        onClick={() => router.navigate("/workouts")} />
      <ToolbarItem
        icon="weight"
        text="Measure"
        isActive={window.location.pathname === "/measure"}
        onClick={() => router.navigate("/measure")} />
      <ToolbarItem
        icon="cookie-bite"
        text="Calories"
        isActive={window.location.pathname === "/calories"}
        onClick={() => router.navigate("/calories")} />
    </Toolbar>
  </div>
}
