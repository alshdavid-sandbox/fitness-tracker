import { Exercise, Set } from './exercise'
import { removeIncompleteSets } from './builder';

export interface SetResult { 
  weight: number, 
  reps: number 
}

export interface ExerciseResult {
  id?: string
  date: string
  movement: string
  sets: SetResult[]
  tags: string[]
  notes: string
}

export const unmarshallExercise = (
  result: ExerciseResult
): Exercise => {
  const sets = []
  for (const setResult of result.sets) {
    sets.push(new Set(setResult.reps, setResult.weight))
  }
  return new Exercise(
    result.id,
    new Date(Date.parse(result.date)),
    result.movement,
    sets,
    result.tags,
    result.notes,
  )
}

export const unmarshallExercises = (
  results: ExerciseResult[]
): Exercise[] => {
  const exercises: Exercise[] = []
  for (const result of results) {
    exercises.push(unmarshallExercise(result))
  }
  return exercises
}

export const marshallExercise = (
  exercise: Exercise
): ExerciseResult => {
  const sets = removeIncompleteSets(exercise.sets)
  return {
    date: exercise.date.toISOString(),
    movement: exercise.movement.toLowerCase(),
    sets,
    tags: exercise.tags,
    notes: exercise.notes,
  }
}