import { IExercise } from './types'
import { getCol } from './db'
import { constants } from '../app.constants'
import moment from 'moment'

export class Exercises {
    static defaultOrderBy = constants.databases.exercises.defaultOrderBy
    static db = () => getCol(constants.databases.exercises.name)

    static async getByMovement(movement):Promise<IExercise[]> {
        movement = movement.toLowerCase()

        return (await this.db())
            .filter(e => e.movement.includes(movement) || e.tags.find(t => t.includes(movement)))  
            .sortBy(constants.databases.exercises.defaultOrderBy)  
    }

    static async getAll(from?, to?, orderBy = this.defaultOrderBy):Promise<IExercise[]> {
        if (from || to) {
            let fromDate = moment(from).format(constants.timeFormat)
            if (!moment(fromDate).isValid()) {
                fromDate = moment().format(constants.timeFormat)
            }
            let toDate = moment(to).format(constants.timeFormat)
            if (!moment(toDate).isValid()) {
                toDate = moment().format(constants.timeFormat)
            }
            return (await this.db())
                .where('date')
                .between(fromDate, toDate)  
                .orderBy(orderBy)  
                .reverse()
                .toArray()
        }

        return (await this.db())
            .orderBy(orderBy)  
            .reverse()
            .toArray()
    }

    static async getById(id):Promise<IExercise> {
        return (await this.db())
            .where('id')
            .equals(parseInt(id))
            .first()
    }
    
    static async add({ date, movement, sets = [], tags = [], notes = '' }):Promise<void> {
        if (!movement || !moment(date).isValid()) {
            throw new Error('Invalid input')
        }
        movement = movement.toLowerCase()
        date = moment(date).format(constants.timeFormat)

        return (await this.db())
            .add({ date, movement, sets, tags, notes })
    }
    
    static async update(id, { date, movement, sets, tags, notes }:IExercise):Promise<void> {
        const update = {}

        if (date && !moment(date).isValid()) {
            throw new Error('Invalid date')
        }

        if (date) { update['date'] = date }
        if (movement) { update['movement'] = movement }
        if (notes) { update['notes'] = notes }
        if (tags) { update['tags'] = tags }
        if (sets) { 
            sets = sets.filter(({ reps, weight }) => reps && weight)
            update['sets'] = sets 
        }

        return (await this.db())
            .where("id")
            .equals(parseInt(id))
            .modify(update)
    }

    static async remove(id):Promise<void> {
        return (await this.db())
            .where("id")
            .equals(parseInt(id))
            .delete()
    }

    static async removeAll():Promise<void> {
        return (await this.db())
            .clear();
    }

    static async searchMovements(movement):Promise<string[]> {
        movement = movement.toLowerCase()
        const exercises = await this.getAll()
        const movements:string[] = []

        for (let exercise of exercises) {
            const alreadyFound = movements.includes(exercise.movement)
            const includesMovement = exercise.movement.includes(movement)
            const hasTag = exercise.tags.find(t => t.includes(movement))
            if (!alreadyFound && (includesMovement || hasTag)) {
                movements.push(exercise.movement)
            }    
        }
        
        return movements
    }
}