import Dexie from 'dexie'
import workout from '~/platform/workout'

export const createDatabase = () => {
  const db = new Dexie('liftdex')

  db.version(1).stores({
    [workout.tableName]: workout.schema,
    measurements: 'id,date,weight',
    calories: 'id,date,calories'
  })

  return db.open()
}