import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

let auth: firebase.auth.UserCredential = {
    additionalUserInfo:  null,
    credential: null,
    operationType: null,
    user: null
}
let provider: firebase.auth.GoogleAuthProvider

export const checkForAuth = (): Promise<firebase.User> => new Promise((res, rej) => {
    const sub = firebase.auth().onAuthStateChanged(user => {
        sub()
        return user 
            ? res(user) 
            : rej('Not logged in')
    })
})

export const doLogin = async () => {
    provider = new firebase.auth.GoogleAuthProvider()
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    auth = await firebase.auth().getRedirectResult()
    if (!auth.user) {
      firebase.auth().signInWithRedirect(provider)
      return
    }
}

export const getSessionOrLogin = async () => {
    try {
        const user = await checkForAuth()
        auth.user = user
    } catch (error) {
        await doLogin()
    }
}

export const init = (config) => {
    firebase.initializeApp(config)
}

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

