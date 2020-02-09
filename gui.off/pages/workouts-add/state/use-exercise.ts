import { useService } from "~/gui/services"
import { useState, useEffect } from "preact/hooks"
import workout from "~/platform/workout"

export const useExerciseBuilder = (): workout.Exercise => {
  const services = useService()
  const [ exercise, setExercise ] = useState(new workout.Exercise())

  useEffect(() => {
    if (!services.constructExercise) {
      services.constructExercise = exercise
    } else {
      setExercise(services.constructExercise)
    }
  }, [services])

  return exercise!
}