import { Exercises } from './exercises'
import { BodyWeight } from './bodyweight'
import { Calories } from './calories'
import { getDb } from './db'

export const db = {
    BodyWeight,
    Exercises,
    Calories,
    getDb
}
export * from './types'



