import { ExerciseEntity } from './exercise'
import arrays from '~/kit/arrays'

export const calculateLiftdex = (exercise: ExerciseEntity): number => 
  Math.floor(exercise.sets.reduce((p, c) => p + c.reps * c.weight, 0))

export const exerciseSummary = (exercise: ExerciseEntity): string => {
  if (exercise.sets.length === 0) {
    return ''
  }
  const averageReps = arrays.calcAverage(exercise.sets, set => set.reps)
  const averageWeight = arrays.calcAverage(exercise.sets, set => set.weight)
  return `${exercise.sets.length} Sets x ${Math.floor(averageReps)} Reps x ${Math.floor(averageWeight)}kg`
}