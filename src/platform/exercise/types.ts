
import moment from 'moment'

export interface Set {
    reps: number
    weight: number
}

export interface Exercise {
    id?: string
    date: string
    movement: string
    sets: Set[]
    tags: string[]
    notes: string
}

export interface Getter {
    getAll: () => Promise<Exercise[]>
    getByMovement: (movement: string) => Promise<Exercise[]>
    getBetweenDates: (
        from: moment.Moment,
        to: moment.Moment,
        orderBy: string
    ) => Promise<Exercise[]>
    getById: (id: string) => Promise<Exercise | undefined>
    searchMovements: (movement: string) => Promise<Exercise[]>
}

export interface Adder {
    add: (
        movement: string,
        date: moment.Moment,
        sets: Set[],
        tags: string[],
        notes: ''
    ) => Promise<string>
}

export interface Updater {
    update: (id: string, exercise: Exercise) => Promise<any>
}

export interface Remover {
    remove: (id: string) => Promise<any>
    removeAll: () => Promise<any>
}

export interface Store extends Getter, Adder, Updater, Remover {}