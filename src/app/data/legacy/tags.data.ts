import { DB } from './db.data'

export class Types {

    static add({ tag, movement }) {
        movement.toLowerCase()
        tag.toLowerCase()
        
        let tags = this.getTags()

        if (tags.find(tag => tag.tag == tag && tag.movement == movement)) {

        }
        DB.exec(`
            INSERT INTO 
                ${DB.tables.tags} (tag, movement)
            VALUES (
                '${tag}',
                '${movement}'
            )
        `)
    }

    static searchMovementByTag(q) {
        return DB.exec(`
            SELECT 
                * 
            FROM 
                ${DB.tables.tags}
            WHERE
                tag = '${q.toLowerCase()}'
        `)
    }

    static getTags() {
        return DB.exec(`
            SELECT 
                * 
            FROM 
                ${DB.tables.tags}
        `)
    }

}