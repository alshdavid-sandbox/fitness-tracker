export class Set {
    reps: number | undefined
    weight: number | undefined
}

export class Workout {
    date: string | undefined
    movement: string | undefined
    tags: string[] = []
    notes = ''
    sets: Set[] = []
}

export const create = () => {
    return new Workout()
}