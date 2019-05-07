import moment from 'moment'
import Dexie from 'dexie';
import { table } from './table';
import { timeFormat } from './defaults';
import { Set } from './types'

export const add = (db: Dexie) => async (
    movement: string,
    date: moment.Moment = moment(),
    sets: Set[] = [],
    tags: string[] = [],
    notes = ''
) =>
    (await table(db))
        .add({
            date: date.format(timeFormat),
            movement: movement.toLowerCase(),
            sets,
            tags,
            notes
        })