import Dexie from "dexie";
import { defaultOrderBy } from "./defaults";
import { Exercise } from "./exercise";
import { ExerciseResult, marshallExercise, unmarshallExercise, unmarshallExercises } from './results'
import { startOfDay, endOfDay } from 'date-fns'

export class Store {
  get table() {
    return this.conn.table<ExerciseResult>('workouts')
  }

  constructor(
    private conn: Dexie,
  ) { }

  getAll(
    orderBy = defaultOrderBy
  ): Promise<Exercise[]> {
    return this.table
      .orderBy(orderBy)
      .reverse()
      .toArray()
      .then(unmarshallExercises)
  }

  getByMovement(movement: string): Promise<Exercise[]> {
    return this.table
      .filter(e => e.movement.includes(movement.toLowerCase()))
      .filter(e => !!e.tags.find((tag: string) => tag.includes(movement.toLowerCase())))
      .sortBy(defaultOrderBy)
      .then(unmarshallExercises)
  }

  // Will get exercises for today by default
  getBetweenDates(
    from = new Date(),
    to = new Date(),
    orderBy = defaultOrderBy,
  ): Promise<Exercise[]> {
    return this.table
      .where('date')
      .between(
        startOfDay(from).toISOString(),
        endOfDay(to).toISOString(),
      )
      .reverse()
      .sortBy(orderBy)
      .then(unmarshallExercises)
  }

  getById(id: string): Promise<Exercise | undefined> {
    return this.table
      .where('id')
      .equals(parseInt(id))
      .first()
      .then(result => result ? unmarshallExercise(result) : undefined)
  }

  async add(exercise: Exercise): Promise<void> {
    const payload = marshallExercise(exercise)
    await this.table
      .add(payload)
  }
}
