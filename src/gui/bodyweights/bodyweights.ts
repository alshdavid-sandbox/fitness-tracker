import * as router from '~/platform/router';
import Dexie from 'dexie';

export const bodyweightRoutes = (app: router.Router, db: Dexie) => {

    app.path('/bodyweights', async (req, res) => {
        console.log('todo')
    })

    app.path('/bodyweights/add', async (req, res) => {
        console.log('todo')
    })

}