import { useState, useEffect } from "preact/hooks"
import { useService } from "~/gui/services"
import workout from "~/platform/workout"
import { startOfDay } from "date-fns"

export type ExerciseDate = {
  date: string,
  exercises: workout.ExerciseEntity[]
}

export const useExercises = () => {
  const [ exercises, setExercises ] = useState<ExerciseDate[]>([])
  const { exerciseRepo } = useService()

  useEffect(() => search(), [exerciseRepo])

  const search = (term?: string) => {
    if (!term) {
      exerciseRepo.getAll()
        .then(createExerciseDateList)
        .then(setExercises)
      return
    }
    exerciseRepo.search(term)
      .then(createExerciseDateList)
      .then(setExercises)
  }

  return {
    exercises,
    search
  }
}

const createExerciseDateList = (
  exercises: workout.ExerciseEntity[]
): ExerciseDate[] => {

  const dates: Record<string, workout.ExerciseEntity[]> = {}

  for (const exercise of exercises) {
    const date = startOfDay(exercise.date).toISOString()
    if (dates[date] === undefined) {
      dates[date] = []
    }
    dates[date].push(exercise)
  }

  const dateList: ExerciseDate[] = []
  for (const date in dates) {
    dateList.push({ date, exercises: dates[date]})
  }
  
  return dateList
}

