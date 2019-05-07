import moment from 'moment'
import Dexie from 'dexie';
import { table } from './table';
import { defaultOrderBy, timeFormat } from './defaults';

export const getAll = (db: Dexie) => async () =>
    (await table(db))
        .orderBy(defaultOrderBy)
        .reverse()
        .toArray()

export const getByMovement = (db: Dexie) => async (movement: string) =>
     (await table(db))
        .filter(e => e.movement.includes(movement.toLowerCase()))
        .filter(e => !!e.tags.find(t => t.includes(movement.toLowerCase())))
        .sortBy(defaultOrderBy)

export const getBetweenDates = (db: Dexie) => async (
    from = moment(),
    to = moment(),
    orderBy = defaultOrderBy
) =>
    (await table(db))
        .where('date')
        .between(
            from.format(timeFormat),
            to.format(timeFormat))
        .reverse()
        .sortBy(orderBy)

export const getById = (db: Dexie) => async (id: string) =>
    (await table(db))
        .where('id')
        .equals(parseInt(id))
        .first()

