import { Exercises, Sets, Movements } from '../data'

function getExerciseByMovement(movement) {
    return Exercises.getByMovement(movement.toLocaleLowerCase())
}

function addExercise({ date, movement, sets }) {
    return Exercises.add({ date, movement: movement.toLocaleLowerCase(), sets })
}

function addExercises(exercises) {
    for (let { date, movement, sets } of exercises) {
        this.addExercise({ date, movement: movement.toLocaleLowerCase(), sets })
    }
}

function getExercises() {
    return Exercises.getAll()
}

function getExercise(id) {
    return Exercises.getById(id)
}

function updateExercise({ id, date, movement, sets }) {
    return Exercises.update({ id, date, movement: movement.toLocaleLowerCase(), sets })
}

function removeExerciseById(id) {
    return Exercises.remove(id)
}

function removeAll() {
    Exercises.clear()
    Sets.clear()
    Movements.clear()
}

function searchMovements(q) {
    return Movements.search(q.toLocaleLowerCase())
}

function addMovement(movement) {
    return Movements.add(movement.toLocaleLowerCase())
}

export const api = {
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

window['api'] = api
