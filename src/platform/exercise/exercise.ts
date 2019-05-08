import Dexie from 'dexie'
import { getAll, getByMovement, getBetweenDates, getById } from './get'
import { add } from './add'
import { Store } from './types';

export const createStore = (db: Dexie): Store => {
    return {
        getAll: getAll(db),
        getByMovement: getByMovement(db),
        getBetweenDates: getBetweenDates(db),
        getById: getById(db),
        add: add(db)
    } as any //TODO impliment other methods
}


