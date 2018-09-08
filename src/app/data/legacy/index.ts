import * as fromAlasql from './db.data'
import * as fromExercises from './exercises.data'
import * as fromDexie from '../exercises'

window['SQL'] = fromAlasql.DB

export async function migrate() {
    if (localStorage.getItem('migrated')) {
        return
    }
    const exercises = fromExercises.Exercises.getAll()

    console.log("Migrating data to new database")
    for (let exercise of exercises) {
        delete exercise.id
        let tags = []

        if (tagmap[exercise.movement.toLowerCase()]) {
            tags = tagmap[exercise.movement.toLowerCase()]
        }

        fromDexie.Exercises.add({
            date: exercise.date,
            movement: exercise.movement,
            sets: exercise.sets,
            tags
        })
    }

    localStorage.setItem('migrated', "true")
    // localStorage.removeItem('alasql')
    // localStorage.removeItem('db')
    // localStorage.removeItem('db.app_exercises')
    // localStorage.removeItem('db.app_movements')
    // localStorage.removeItem('db.app_sets')
    // localStorage.removeItem('db.app_tags')
}

const tagmap = {
    "flat barbell bench press": ["chest"], 
    "decline chest cable flys": ["chest"], 
    "incline chest press machine": ["chest"], 
    "inline cable chest press": ["chest"], 
    "ab pulldown": ["abs"], 
    "squats": ["legs", "abs", "back"], 
    "seated leg curl": ["legs"], 
    "leg extensions": ["legs"],
    "trisep pulldown": ["arms"], 
    "machine shoulder press": ["shoulders"], 
    "cable rear flys": ["shoulders"], 
    "laterial side raise": ["shoulders"], 
    "facepulls": ["back", "shoulders"], 
    "rear cable fly machine": ["back", "shoulders"], 
    "lat pull downs": ["back"], 
    "underhand pullups": ["back", "arms", "biceps"], 
    "single lat pull downs": ["back"], 
    "preacher curl machine": ["biceps"], 
    "dips": ["triseps", "chest"], 
    "single trisep pullup": ["arms"], 
    "single arm cable row": ["back"], 
    "barbell bicep curl": ["arms"], 
    "single arm rear cable flys": ["back"], 
    "incline barbell bench press": ["chest"], 
    "decline cable chest press": ["chest"], 
    "single arm row machine": ["back"], 
    "medicine ball push up": ["chest", "arms"], 
    "close grip bench press": ["chest"], 
    "standing barbell shoulder press": ["shoulders"], 
    "single arm rear machine flys": ["back"], 
    "seated incline cable fly": ["chest"], 
    "single leg leg curl": ["legs"], 
    "single leg machine leg press": ["legs"], 
    "single leg leg extension": ["legs"], 
    "upright cable row": ["shoulders", "back"], 
    "single arm machine bisep curl": ["arms"], 
    "machine chest press": ["chest"]
}