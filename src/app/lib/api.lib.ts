import { Exercise, db } from '../data'


export function getExerciseByMovement(movement):Promise<Exercise[]> {
    return db.Exercises.getByMovement(movement)
}

export function addExercise({ date, movement, sets }):Promise<void> {
    return db.Exercises.add({ date, movement, sets })
}

export async function addExercises(exercises:Exercise[]):Promise<void> {
    for (let exercise of exercises) {
        await this.addExercise(exercise)
    }
}

export function getExercises(from?, to?):Promise<Exercise[]> {
    return db.Exercises.getAll(from, to)
}

export function getExercise(id):Promise<Exercise> {
    return db.Exercises.getById(id)
}

export function updateExercise({ id, date, movement, sets }:Exercise):Promise<void> {
    return db.Exercises.update(id, { date, movement, sets })
}

export function removeExerciseById(id):Promise<void> {
    return db.Exercises.remove(id)
}

export async function removeAll():Promise<void> {
    return db.Exercises.removeAll()
}

export async function searchMovements(q):Promise<string[]> {
    return db.Exercises.searchMovements(q)
}

export function addMovement(movement):void {
    // return db.Movements.add(movement)
}

export const api = {
    db,
    getExerciseByMovement,
    addExercise,
    addExercises,
    getExercises,
    getExercise,
    updateExercise,
    removeExerciseById,
    removeAll,
    searchMovements,
    addMovement
}

// For debug
window['data'] = api
