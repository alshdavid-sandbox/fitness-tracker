import { BehaviorSubject } from "rxjs";
import { cloneDeep, isEqual } from 'lodash-es'

/*
  ToyStore.Base is a class to be extended to 
  help in creating simple reactive stores
*/
export class Base<T> {
  state: BehaviorSubject<T>

  get initialValueClone(): T {
    return cloneDeep(this.initialValue)
  }

  get value() {
    return this.state.value
  }

  // composing rxjs method for ergonomics
  get subscribe() {
    return this.state.subscribe.bind(this.state)
  }

  // composing rxjs method for ergonomics
  get pipe() {
    return this.state.pipe.bind(this.state)
  }

  constructor(
    private initialValue: T
  ) {
    this.state = new BehaviorSubject(this.initialValueClone)
  }

  setState(update: Partial<T>) {
    const clonedValue = cloneDeep(this.value)
    const updated = { ...clonedValue, ...update }
    if (isEqual(updated, this.value)) {
      return
    }
    const cloned = cloneDeep(updated)
    this.state.next(cloned)
  }

  replaceState(update: Partial<T>) {
    this.reset()
    this.setState(update)
  }

  reset() {
    this.state.next(this.initialValueClone)
  } 
}

/*
  ToyStore.Create() is used to create instances of stores
*/
export const Create = <T>(initialValue: T) => new Base(initialValue)
