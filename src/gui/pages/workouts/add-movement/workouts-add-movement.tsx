import { h } from "preact"
import "./workouts-add-movement.scss"
import { useAppState } from "~/gui/context"
import { SearchPanel } from "~/gui/components"
import { Workout } from "~/platform/workout";
import { useState, useMemo } from "preact/hooks";

export const WorkoutsAddMovement = () => {
  const { router, workoutBuilder, workouts } = useAppState()
  const [ movements, setMovements ] = useState<string[]>([])

  const selectMovement = (selected: string) => {
    workoutBuilder.setMovement(selected)
    router.back()
  }

  const getMovements = async (term: string = '') => {
    const exercises = await workouts.getAll()
    const movements = Workout.getAllMovements(exercises)
    if (term === '') {
      setMovements(movements)
      return
    }
    const filtered: string[] = []
    for (const movement of movements) {
      if (!movement.includes(term)) {
        continue
      }
      filtered.push(movement)
    }
    setMovements(filtered)
  }

  useMemo(() => {
    getMovements()
  }, [workouts])

  return (
    <div className="component-workouts-add-movement">
      <SearchPanel 
        placeholder="Search Movements"
        onInput={(e: any) => getMovements(e.target.value)}/>
      {
        movements.map(movement => <div 
          className="item" 
          onClick={() => selectMovement(movement)}>
          {movement}
        </div>)
      }
    </div>
  )
}
