import { createContext } from 'preact'
import { useContext } from 'preact/hooks';
import crayon from 'crayon';
import crayonPreact from 'crayon-preact';
import workout from '~/platform/workout';

export const services: any = {}

type Services = {
  router: crayon.Router,
  exerciseRepo: workout.ExerciseRepository,
  constructExercise?: workout.Exercise,
}

export const provide = <T extends keyof Services>(
  key: T, service: Services[T]
) => services[key] = service

export const AppContext = createContext<any>(services)
export const ServiceMiddleware = crayonPreact.withContext(AppContext, services)
export const useService = (): Services => useContext(AppContext) as Services

export default {
  provide,
  middleware: ServiceMiddleware
}