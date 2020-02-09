export type Set = {
  reps: number
  weight: number
}

type Exercise = {
  id?: string
  date: Date
  movement: string 
  sets: Set[]
  tags: string[]
  notes: string
}

export class ExerciseEntity implements Exercise {
  constructor(
    public id?: string,
    public movement: string = '',
    public sets: Set[] = [],
    public tags: string[] = [],
    public notes: string = '',
    public date: Date = new Date(),
  ) { }
}
