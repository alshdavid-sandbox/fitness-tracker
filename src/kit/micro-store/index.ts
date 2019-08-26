import * as fromMicroStore from './micro-store'

export const MicroStore = {
  ...fromMicroStore
}

export declare module MicroStore {
  export type Base<T> = fromMicroStore.Base<T>
}

export default MicroStore