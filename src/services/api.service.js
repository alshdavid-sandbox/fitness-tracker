import { Exercises } from '../data/exercises.service'

export const api = {
    addExercise({ date, movement, sets }) {
        return Exercises.add({ date, movement, sets })
    },
    getExercises() {
        return Exercises.get()
    },
    getExercise(id) {
        return Exercises.getById(id)
    }
}

global.api = api