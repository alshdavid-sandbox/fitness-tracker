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

  prettySetsString(): string {
    if (this.sets.length === 0) {
      return ''
    }
    const numberOfSets = this.sets.length
    const averageReps = Math.floor((this.sets.reduce((p, c) => p + c.reps, 0)) / numberOfSets)
    const averageWeight = Math.floor((this.sets.reduce((p, c) => p + c.weight, 0)) / numberOfSets)
    return `${numberOfSets} Sets x ${averageReps} Reps x ${averageWeight}kg`
  }

  liftdex(): number {
    return Math.floor(this.sets.reduce((p, c) => p + c.reps + c.weight, 0))
  }
}
