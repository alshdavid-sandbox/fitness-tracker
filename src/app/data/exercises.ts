import { Exercise, Set } from './types'
import { getDb } from './db'
import { constants } from '../app.constants'
import moment from 'moment'

export class Exercises {
    static async getByMovement(movement):Promise<Exercise[]> {
        movement = movement.toLowerCase()
        const db = await getDb()

        return await db[constants.databases.exercises.name]
                .where('movement')
                .equals(movement)  
                .sortBy(constants.databases.exercises.defaultOrderBy)  
    }

    static async getAll(from?, to?, orderBy = constants.databases.exercises.defaultOrderBy):Promise<Exercise[]> {
        const db = await getDb()

        if (from || to) {
            let fromDate = moment(from).format(constants.timeFormat)
            if (!moment(fromDate).isValid()) {
                fromDate = moment().format(constants.timeFormat)
            }
            let toDate = moment(to).format(constants.timeFormat)
            if (!moment(toDate).isValid()) {
                toDate = moment().format(constants.timeFormat)
            }
            return await db[constants.databases.exercises.name]
                .where('date')
                .between(fromDate, toDate)  
                .orderBy(orderBy)  
                .toArray()
        }

        return await db[constants.databases.exercises.name] 
            .orderBy(orderBy)  
            .toArray()
    }

    static async getById(id):Promise<Exercise> {
        id = parseInt(id)
        const db = await getDb()
        return await db[constants.databases.exercises.name] 
            .where('id')
            .equals(id)
            .first()
    }
    
    static async add({ date, movement, sets }):Promise<void> {
        if (!movement || !moment(date).isValid()) {
            throw new Error('Invalid input')
        }
        movement = movement.toLowerCase()
        date = moment(date).format(constants.timeFormat)

        const db = await getDb()
        await db[constants.databases.exercises.name].add({ date, movement, sets })
        return
    }
    
    static async update(id, { date, movement, sets }):Promise<void> {
        const update = {}

        if (date && !moment(date).isValid()) {
            throw new Error('Invalid input')
        }

        if (date) { update['date'] = date }
        if (movement) { update['movement'] = movement }
        if (sets) { 
            sets = sets.filter(({ reps, weight }) => reps || weight)
            update['sets'] = sets 
        }

        const db = await getDb()
        return db[constants.databases.exercises.name]
            .where("id")
            .equals(id)
            .modify(update)
    }

    static async remove(id):Promise<void> {
        id = parseInt(id)
        const db = await getDb()

        await db[constants.databases.exercises.name]
            .where("id")
            .equals(id)
            .delete();
    }

    static async removeAll():Promise<void> {
        const db = await getDb()

        await db[constants.databases.exercises.name]
            .clear();
    }

    static async searchMovements(movement):Promise<string[]> {
        movement = movement.toLowerCase()
        const exercises = await this.getAll()
        const movements:string[] = []

        for (let exercise of exercises) {
            let m = exercise.movement
            if (!movements.includes(m) && m.includes(movement)) {
                movements.push(m)
            }
        }
        
        return movements
    }
}