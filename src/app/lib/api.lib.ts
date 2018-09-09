import { IExercise, db, IBodyWeight } from '../data'


export function getExerciseByMovement(movement):Promise<IExercise[]> {
    return db.Exercises.getByMovement(movement)
}

export function addExercise({ date, movement, sets, tags, notes }):Promise<void> {
    return db.Exercises.add({ date, movement, sets, tags, notes })
}

export async function addExercises(exercises:IExercise[]):Promise<void> {
    for (let exercise of exercises) {
        await this.addExercise(exercise)
    }
}

export function getExercises(from?, to?):Promise<IExercise[]> {
    return db.Exercises.getAll(from, to)
}

export function getExercise(id):Promise<IExercise> {
    return db.Exercises.getById(id)
}

export function updateExercise({ id, date, movement, sets, tags, notes }:IExercise):Promise<void> {
    return db.Exercises.update(id, { date, movement, sets, tags, notes })
}

export function removeExerciseById(id):Promise<void> {
    return db.Exercises.remove(id)
}

export async function removeAll():Promise<void> {
    await db.Exercises.removeAll()
    await db.BodyWeight.removeAll()
    return
}

export async function searchMovements(q):Promise<string[]> {
    return db.Exercises.searchMovements(q)
}

export async function getBodyweights(from?, to?, orderBy?):Promise<IBodyWeight[]> {
    return db.BodyWeight.get(from, to, orderBy)
}

export async function getBodyweight(id):Promise<IBodyWeight> {
    return db.BodyWeight.getById(id)
}


export async function addBodyweight({ date, weight }):Promise<void> {
    return db.BodyWeight.add({ date, weight })
}

export async function addBodyweights(bodyWeights:IBodyWeight[]):Promise<void> {
    for (let bodyWeight of bodyWeights) {
        await this.addBodyweight(bodyWeight)
    }
}

export async function updateBodyweight({ id, date, weight }:IBodyWeight):Promise<void> {
    return db.BodyWeight.update(id, { date, weight })
}

export async function removeBodyweight(id):Promise<void> {
    return db.BodyWeight.remove(id)
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
    getBodyweights,
    getBodyweight,
    addBodyweight,
    removeBodyweight,
    updateBodyweight,
    addBodyweights
}

// For debug
window['data'] = api
