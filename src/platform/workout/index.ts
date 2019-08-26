import * as fromExercise from './exercise'
import * as fromStore from './store'
import * as fromDefaults from './defaults'
import * as fromBuilder from './builder'

export const Workout = {
  ...fromStore,
  ...fromDefaults,
  ...fromExercise,
  ...fromBuilder,
}
export declare module Workout {
  export type Set = fromExercise.Set
  export type Exercise = fromExercise.Exercise
  export type Store = fromStore.Store
  export type Builder = fromBuilder.Builder
}

export default Workout

