import { useMemo, useState } from "preact/hooks";
import { useAppState } from "~/gui/context";
import { Workout } from "~/platform/workout";

export type WorkoutList = Record<string, Workout.Exercise[]>

export const useWorkoutList = () => {
  const { workouts } = useAppState()
  const [workoutList, setWorkoutList] = useState<WorkoutList>({})

  useMemo(async () => {
    const list = await workouts.getAll()
    const oList = Workout.organiseByDate(list)
    setWorkoutList(oList)
  }, [workouts])

  return workoutList
}
