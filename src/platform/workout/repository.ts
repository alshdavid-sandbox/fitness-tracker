import { ExerciseEntity } from './exercise' 

export class ExerciseRepository {
  private exercises: ExerciseEntity[] = []

  public search(term: string) {
    return this.exercises
      .map(e => ({ e, values: JSON.stringify([e.movement, e.notes, e.tags]) }))
      .filter(e => e.values.includes(term))
      .map(r => r.e)
  }

  public getID(id: string) {
    const index = this.findIndex(id)
    return this.exercises[index]
  }

  public add(e: ExerciseEntity) {
    if (!e.id) {
      throw new Error('InvalidExercise')
    }
    this.exercises.push(e)
  }

  public remove(e: ExerciseEntity) {
    const index = this.findIndex(e.id)
    this.exercises.splice(index, 1)
  }

  public update(e: ExerciseEntity) {
    const index = this.findIndex(e.id)
    this.exercises[index] = e
  }

  private findIndex(id?: string) {
    const index = this.exercises.findIndex(entity => entity.id === id)
    if (index === -1 || !id) {
      throw new Error('ExerciseNotFound')
    }
    return index
  }
}
