import "./workouts.scss"
import { h, Fragment } from "preact"
import { DateItem, WorkoutItem } from "./components";
import { useNavbar, useFab, useWorkoutList } from './state'
import { Workout } from "~/platform/workout";

export const Workouts = () => {
  const workoutList = useWorkoutList()
  useNavbar()
  useFab()

  return <div className="component-workouts">
    {Object.keys(workoutList).map(key => {
      return (
        <Fragment>
          <DateItem dateString={key} />
          {workoutList[key].map(exercise => (
            <WorkoutItem
              title={exercise.movement}
              subtitle={Workout.getPrettySummary(exercise)}
              liftdex={Workout.calculateLiftex(exercise)}
            />
          ))}
        </Fragment>
      )
    })}
  </div>
}
