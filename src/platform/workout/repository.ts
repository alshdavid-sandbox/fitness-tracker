import { ExerciseEntity } from './exercise' 
import Dexie from 'dexie'
import { startOfDay, endOfDay } from 'date-fns'
import { defaultOrderBy } from "./defaults";
import { schemaKeys, tableName } from './schema';

export class ExerciseRepository {
  private get table() {
    return this.conn.table<ExerciseEntity>(tableName)
  }

  constructor(
    private conn: Dexie,
  ) {}

  getAll(
    orderBy = defaultOrderBy
  ): Promise<ExerciseEntity[]> {
    return this.table
      .orderBy(orderBy)
      .reverse()
      .toArray()
  }

  search(term: string): Promise<ExerciseEntity[]> {
    term = term.toLowerCase()
    return this.table
      .filter(e => JSON.stringify([e.movement, e.tags, e.notes]).includes(term))
      .sortBy(defaultOrderBy)
  }

  getBetweenDates(
    from = new Date(),
    to = new Date(),
    orderBy = defaultOrderBy,
  ): Promise<ExerciseEntity[]> {
    return this.table
      .where(schemaKeys.date)
      .between(
        startOfDay(from),
        endOfDay(to),
      )
      // .reverse()
      // .sortBy(orderBy)
      .toArray()
  }

  getById(id: string): Promise<ExerciseEntity | undefined> {
    return this.table
      .where(schemaKeys.id)
      .equals(parseInt(id))
      .first()
  }

  async add(exercise: ExerciseEntity): Promise<void> {
    await this.table.add(exercise)
  }
}
