import uuid from 'uuid/v4'

export type Set = {
  reps: number
  weight: number
}

export type ExerciseEntity = {
  id: string
  date: Date
  movement: string 
  sets: Set[]
  tags: string[]
  notes: string
}

export class Exercise implements ExerciseEntity {
  constructor(
    public id: string = uuid(),
    public date: Date = new Date(),
    public movement: string = '',
    public sets: Set[] = [],
    public tags: string[] = [],
    public notes: string = '',
  ) { }
}
