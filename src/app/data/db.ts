import Dexie from 'dexie'
import { constants } from '../app.constants'
let db

export async function getDb(): Promise<any> {
    if (db) {
        return db
    }

    db = new Dexie(constants.databases.exercises.name)
    for (let database of Object.values(constants.databases)) {
        db.version(1).stores({
            [database.name]: database.schema.join(',')
        })
    }
    
    await db.open()
    return db
}
