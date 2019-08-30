import { Base as OGBase, Create } from './toy-store'

export const ToyStore = {
  Create,
  Base: OGBase,
}

export declare module MicroStore {
  export type Base<T> = OGBase<T>
}

export default ToyStore