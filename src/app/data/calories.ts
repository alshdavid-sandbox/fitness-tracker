import { IBodyWeight } from './types'
import { getCol } from './db'
import { constants } from '../app.constants'
import moment from 'moment'

export class Calories {
    static defaultOrderBy = constants.databases.calories.defaultOrderBy
    static db = () => getCol(constants.databases.calories.name)

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
                .orderBy(orderBy)  
                .toArray()
        }

        return (await this.db())
            .orderBy(orderBy)  
            .toArray()
    }

    static async getById(id):Promise<void> {
        return (await this.db())
            .where('id')
            .equals(parseInt(id))
            .first()
    }

    static async add({ date, calories }):Promise<void> {
        if (!calories || !moment(date).isValid()) {
            throw new Error('Invalid input')
        }
        calories = parseInt(calories)
        date = moment(date).format(constants.timeFormat)

        return (await this.db())
            .add({ date, calories })
    }

    static async update(id, { date, calories }):Promise<void> {
        const update = {}

        if (date && !moment(date).isValid()) {
            throw new Error('Invalid date')
        }

        if (date) { update['date'] = date }
        if (calories) { update['calories'] = calories }

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