import "./workouts.scss"
import { h, Fragment } from "preact"
import { DateItem, WorkoutItem } from "./components";
import { useNavbar, useFab, useWorkoutList } from './state'
import { Workout } from "~/platform/workout";
import { useAppState } from "~/gui/context";
import { useMemo } from "preact/hooks";

export const Workouts = () => {
  const { fabCtrl } = useAppState()
  const workoutsByDateMap = useWorkoutList()
  const workoutList = Object.entries(workoutsByDateMap)
  useNavbar()
  useFab()

  useMemo(() => {
    if (workoutList.length) {
      fabCtrl.setState({ pulse: false })
    } else {
      fabCtrl.setState({ pulse: true })
    }
  }, [workoutList, fabCtrl])

  return <div className="component-workouts">
    { 
      !workoutList.length &&
      <div 
        className="no-movements">
        <div className="title">No Movements</div>
        <i>Click the plus below to get started</i>
      </div>
    }
    { 
      workoutList.map(([date, exercises]) => 
      <Fragment>
        <DateItem dateString={date} />
        {exercises.map(exercise => (
          <WorkoutItem
            title={exercise.movement || 'No Movement'}
            subtitle={Workout.getPrettySummary(exercise) || 'No Set Data'}
            liftdex={Workout.calculateLiftex(exercise)}
          />
        ))}
      </Fragment>)
    }
  </div>
}
