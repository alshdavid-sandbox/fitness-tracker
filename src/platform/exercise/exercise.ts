import moment from 'moment'
import Dexie from 'dexie';

const timeFormat = 'YYYY-MM-DD'
const defaultOrderBy = 'date'

const table = (db: Dexie): Promise<Dexie.Table<any, any>> => (db as any).exercises

export class Exercise {
    constructor(
        private db: Dexie
    ){}

    async getAll() {
        return (await table(this.db)) 
            .orderBy(defaultOrderBy)
            .reverse()
            .toArray()
    }
    
    async add(
        movement: string, 
        date: moment.Moment = moment(), 
        sets = [], 
        tags = [], 
        notes = ''
    ) {
        movement = movement.toLowerCase()
        const dateString = date.format(timeFormat)
    
        return (await table(this.db))
            .add({ 
                date: dateString, 
                movement, 
                sets, 
                tags,
                notes 
            })
    }
}

export const init = (db: Dexie) => new Exercise(db)