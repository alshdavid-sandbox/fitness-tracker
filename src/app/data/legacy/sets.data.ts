import { DB } from './db.data'
const table = 'app_sets'

export class Sets {
    static get(id) {
        return DB.exec(`
            SELECT 
                * 
            FROM 
                ${table}
            WHERE 
                exercise = '${id}'
        `)
    }

    static add({ id, reps, weight }) {
        return DB.exec(`
            INSERT INTO 
                ${table} (
                    exercise, 
                    reps, 
                    weight
                )
            VALUES (
                '${id}',
                '${reps}', 
                '${weight}'
            )
        `)
    }

    static remove(id){
        return DB.exec(`
            DELETE FROM
                ${table}
            WHERE 
                exercise = '${id}'
        `)
    }

    static clear(){
        DB.exec(`
            DROP TABLE
                ${table}
        `)

        DB.setup()
    }
}