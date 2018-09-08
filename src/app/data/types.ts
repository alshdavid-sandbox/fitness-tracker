export interface Set {
    excercise?: string
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