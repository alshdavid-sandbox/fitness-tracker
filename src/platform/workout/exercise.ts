export class Set {
  constructor(
    public reps: number = 0,
    public weight: number = 0,
  ) { }
}

export class Exercise {
  constructor(
    public id?: string,
    public date: Date = new Date(),
    public movement: string = '',
    public sets: Set[] = [],
    public tags: string[] = [],
    public notes: string = '',
  ) { }
}

export const getPrettySummary = (exercise: Exercise): string => {
  if (exercise.sets.length === 0) {
    return ''
  }
  const numberOfSets = exercise.sets.length
  const averageReps = Math.floor((exercise.sets.reduce((p, c) => p + c.reps, 0)) / numberOfSets)
  const averageWeight = Math.floor((exercise.sets.reduce((p, c) => p + c.weight, 0)) / numberOfSets)
  return `${numberOfSets} Sets x ${averageReps} Reps x ${averageWeight}kg`
}

export const calculateLiftex = (exercise: Exercise): number => {
  return Math.floor(exercise.sets.reduce((p, c) => p + c.reps * c.weight, 0))
}