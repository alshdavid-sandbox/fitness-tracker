import { BehaviorSubject } from "rxjs";

export class Base<T> {
  state: BehaviorSubject<T>

  get value() {
    return this.state.value
  }

  constructor(
    private initialState: T
  ) {
    this.state = new BehaviorSubject(initialState)
  }

  get subscribe() {
    return this.state.subscribe.bind(this.state)
  }

  get pipe() {
    return this.state.pipe.bind(this.state)
  }

  setState(state: Partial<T>) {
    this.state.next({
      ...this.value,
      ...state
    })
  }

  replaceState(state: Partial<T>) {
    this.reset()
    this.state.next({
      ...this.value,
      ...state
    })
  }

  reset() {
    this.state.next(this.initialState)
  } 
}