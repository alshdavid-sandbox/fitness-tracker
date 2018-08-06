import { DB } from '../data/db.data'
const table = 'app_movements'

export class Movements {
    static search(q) {
        let list = this.getAll()
        return list.filter(item => item.toLocaleLowerCase().includes(q.toLocaleLowerCase()))
    }

    static getAll():string[] {
        let list = DB.exec(`
            SELECT
                *
            FROM
                ${table}
        `)
        return list.map(item => item.name)
    }

    static add(movement) {
        movement = movement.toLocaleLowerCase()
        if (this.getAll().includes(movement)) {
            return
        }
        
        DB.exec(`
            INSERT INTO
                app_movements (
                    name
                )
            VALUES (
                '${movement.toLowerCase()}'
            )
        `)
    }

    static sync() {
        this.clear()
        
        const exercises = DB.exec(`
            SELECT 
                * 
            FROM 
                app_exercises
        `)

        exercises
            .forEach(exercise => this.add(exercise.movement.toLowerCase()))
    }

    static clear(){
        DB.exec(`
            DROP TABLE
                ${table}
        `)

        DB.setup()
    }
}