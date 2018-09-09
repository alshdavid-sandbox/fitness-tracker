import { IBodyWeight } from './types'
import { getCol } from './db'
import { constants } from '../app.constants'
import moment from 'moment'

export class BodyWeight {
    static defaultOrderBy = constants.databases.bodyweights.defaultOrderBy
    static db = () => getCol(constants.databases.bodyweights.name)

    static async get(from?, to?, orderBy = this.defaultOrderBy):Promise<IBodyWeight[]> {
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
                .reverse()
                .sortBy(orderBy)  
        }

        return (await this.db())
            .orderBy(orderBy)  
            .reverse()
            .toArray()
    }

    static async getById(id):Promise<IBodyWeight> {
        return (await this.db())
            .where('id')
            .equals(parseInt(id))
            .first()
    }

    static async add({ date, weight }):Promise<void> {
        if (!weight || isNaN(weight) || !moment(date).isValid()) {
            throw new Error('Invalid input')
        }
        weight = parseFloat(weight).toFixed(2)



        date = moment(date).format(constants.timeFormat)

        return (await this.db())
            .add({ date, weight })
    }

    static async update(id, { date, weight }):Promise<void> {
        const update = {}

        if (date && !moment(date).isValid()) {
            throw new Error('Invalid date')
        }

        if (date) { update['date'] = date }
        if (weight) { update['weight'] = weight }

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
}