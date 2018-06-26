import moment from 'moment'
import { DB } from './db.service'
const fmt = 'YYYY-MM-DD'
const table = 'app_types'

export class Types {

    static add(type) {
        DB.exec(`
            INSERT INTO 
                ${table} (type)
            VALUES (
                '${type}'
            )
        `)
    }

    static get() {
        return DB.exec(`
            SELECT 
                * 
            FROM 
                ${table}
        `)
    }

}