import "./recent.scss"
import { h, Fragment } from "preact"
import { useMemo, useState } from "preact/hooks"
import { useAppState } from "~/gui/context"
import Workout from "~/platform/workout"
import { SubNavbar, WorkoutItem, DateItem } from "./components"

export const WorkoutsRecent = () => {
  const { workouts } = useAppState()
  const [workoutList, setWorkoutList] = useState<
    Record<string, Workout.Exercise[]>
  >({})

  useMemo(async () => {
    const list = await workouts.getAll()
    const oList = Workout.organiseByDate(list)
    setWorkoutList(oList)
  }, [workouts])

  return (
    <div className="component-workouts-recent">
      <SubNavbar />
      <div className="exercise-list">
        {Object.keys(workoutList).map(key => {
          return (
            <Fragment>
              <DateItem dateString={key} />
              {workoutList[key].map(workout => (
                <WorkoutItem
                  title={workout.movement}
                  subtitle={workout.prettySetsString()}
                  liftdex={workout.liftdex()}
                />
              ))}
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
