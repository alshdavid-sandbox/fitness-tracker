declare const firebase: any
declare const auth: any

export namespace cloudStorage {
    export interface IStore {
        settings: {},
        exercises: any[],
        bodyweights: any[]
    }

    export class Store implements IStore {
        constructor(
            public settings: {} = {},
            public exercises: any[] = [],
            public bodyweights: any[] = []
        ){}
    }

    export const get = async (): Promise<IStore> => {
        const store = new Store()
        const response = (await firebase
            .database()
            .ref(auth.user.uid)
            .once('value'))
            .val()
        
        Object.assign(store, response)
        return store
    }

    export const set = (value: IStore) => {
        const store = new Store()
        Object.assign(store, value)
        return firebase
            .database()
            .ref(auth.user.uid)
            .set(store)
    }
}
