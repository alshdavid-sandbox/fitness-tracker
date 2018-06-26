import moment from 'moment'
import { DB } from '../data/db.service'
import { Sets } from '../data/sets.service'

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
                '${movement}'
            )
        `)

        for (let set of sets) {
            Sets.add({
                id,
                reps: set.reps,
                weight: set.weight
            })
        }
        
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

    static get({ date = moment().subtract(3, 'months').format(fmt) } = {}) {
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

}