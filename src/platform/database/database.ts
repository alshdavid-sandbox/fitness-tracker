import Dexie from 'dexie'

export const connect = () => {
  const db = new Dexie('liftdex')

  db.version(1).stores({
    workouts: '++id,date,movement,sets,tags,notes',
    bodyweights: '++id,date,weight',
    calories: '++id,date,calories'
  })

  return db.open()
}