import { h } from "preact"
import "./workouts-add-movement.scss"
import { useAppState } from "~/gui/context"
import { SearchPanel } from "~/gui/components"

export const WorkoutsAddMovement = () => {
  const { router, workoutBuilder } = useAppState()

  const selectMovement = (selected: string) => {
    workoutBuilder.setMovement(selected)
    router.back()
  }

  return (
    <div className="component-workouts-add-movement">
      <SearchPanel 
        placeholder="Search Movements"/>
      <div className="item" onClick={() => selectMovement("Bench Press")}>
        Bench Press
      </div>
    </div>
  )
}
