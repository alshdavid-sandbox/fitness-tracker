export interface ISet {
    excercise?: string
    reps: number
    weight: number
}

export interface IExercise {
    id?: string
    date: string
    movement: string
    sets: ISet[]
    tags: string[]
    notes: string
}

export interface IBodyWeight {
    id?: string
    weight: string
    date: string
}