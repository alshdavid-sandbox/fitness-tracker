import moment from 'moment'
import Dexie from 'dexie';

const timeFormat = 'YYYY-MM-DD'
const defaultOrderBy = 'date'

const col = (db: Dexie): Promise<Dexie.Collection<any, any>> => (db as any).exercises

const getAll = async (db: Dexie) => {
    return (await col(db)) 
        .reverse()
        .toArray()
}

const add = async (
    db: Dexie,
    date: moment.Moment, 
    movement: string, 
    sets = [], 
    tags = [], 
    notes = ''
)  => {
    movement = movement.toLowerCase()
    const dateString = date.format(timeFormat)

    return (await col(db))
        .add({ date: dateString, movement, sets, tags, notes })
}