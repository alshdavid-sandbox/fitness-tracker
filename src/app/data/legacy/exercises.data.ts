import moment from 'moment'
import { DB } from './db.data'
import { Sets } from './sets.data'
import { Movements } from './movements.data'

const fmt = 'YYYY-MM-DD'
const table = 'app_exercises'

export class Exercises {

    static add({ date, movement, sets }) {
        let id = DB.unique()
        DB.exec(`
            INSERT INTO 
                ${table} (id, date, movement)
            VALUES (
                '${id}',
                '${moment(date).format(fmt)}', 
                '${movement.toLowerCase()}'
            )
        `)

        for (let set of sets) {
            Sets.add({
                id,
                reps: set.reps,
                weight: set.weight
            })
        }

        Movements.add(movement.toLowerCase())        
    }

    static getById(id) {
        const exercise = DB.exec(`
            SELECT 
                * 
            FROM 
                ${table}
            WHERE 
                id = '${id}'
        `)[0]

        exercise.sets = Sets.get(exercise.id)

        return exercise
    }

    static getAll() {
        const output = {}
        const exercises = DB.exec(`
            SELECT 
                * 
            FROM 
                ${table}
        `)

        exercises
            .forEach(exercise => exercise.sets = Sets.get(exercise.id))

        return exercises
    }

    static getByMovement(movement) {
        const exercises = DB.exec(`
            SELECT 
                * 
            FROM 
                ${table}
            WHERE 
                movement ='${movement.toLowerCase()}' 
        `)

        for (let exercise of exercises) {
            exercise.sets = Sets.get(exercise.id)
        }

        return exercises
    }

    static getByDate({ date = moment().subtract(3, 'months').format(fmt) } = {}) {
        const output = {}
        const exercises = DB.exec(`
            SELECT 
                * 
            FROM 
                ${table}
            WHERE 
                date <='${moment().format(fmt)}' 
            AND 
                date >='${moment(date).format(fmt)}'
        `)

        exercises
            .forEach(exercise => {
                if (!output[exercise.date]) {
                    output[exercise.date] = []
                }
                exercise.sets = Sets.get(exercise.id)
                output[exercise.date].push(exercise)
            })

        return output
    }

    static update({ id, date, movement, sets }) {
        DB.exec(`
            UPDATE 
                ${table}
            SET
                date='${date}',
                movement='${movement.toLowerCase()}'
            WHERE 
                id = '${id}'
            
            
        `)

        Sets.remove(id)

        for (let set of sets) {
            Sets.add({
                id,
                reps: set.reps,
                weight: set.weight
            })
        }

        Movements.sync()
    }

    static remove(id){
        DB.exec(`
            DELETE FROM 
                ${table}
            WHERE 
                id = '${id}'
        `)

        Sets.remove(id)
    }

    static clear(){
        DB.exec(`
            DROP TABLE
                ${table}
        `)

        DB.setup()
    }

}