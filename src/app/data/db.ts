import Dexie from 'dexie'
import { constants } from '../app.constants'
let db

export async function getDb(): Promise<any> {
    if (db) {
        return db
    }
    
    db = new Dexie(constants.databases.exercises.name)

    const VERSION_1 = {
        [constants.databases.exercises.name]: constants.databases.exercises.schema.join(',')
    }
    
    const VERSION_2 = {
        [constants.databases.exercises.name]: constants.databases.exercises.schema.join(','),
        [constants.databases.bodyweights.name]: constants.databases.bodyweights.schema.join(','),
        [constants.databases.calories.name]: constants.databases.calories.schema.join(',')
    }
    
    db.version(2).stores(VERSION_2).upgrade()
    db.version(1).stores(VERSION_1)
    
    await db.open()
    return db
}


export async function getCol(collection) {
    let db = await getDb()
    return db[collection]
}
