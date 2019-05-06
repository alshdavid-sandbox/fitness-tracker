import { BehaviorSubject } from 'rxjs'
import { cloneDeep } from 'lodash'

export interface Item {
  title: string
}

export class Store {
  public items: Item[] = []
  
  public $ = new BehaviorSubject<Item[]>(this.items)

  add(item: Item) {
    const newState = cloneDeep(this.items)
    newState.push(item)
    this.items = newState
    this.$.next(this.items)
  }
}

export const create = (title: string) => ({ title })
export const createStore = () => new Store()