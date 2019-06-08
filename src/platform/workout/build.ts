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

    clear() {
        this.date = undefined
        this.movement = undefined
        this.tags = []
        this.notes = ''
        this.sets = []
    }
}

export const create = () => {
    return new Workout()
}