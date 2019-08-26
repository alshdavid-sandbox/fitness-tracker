import { createContext } from 'preact'
import { Router } from 'crayon';
import { useContext } from 'preact/hooks';
import { NavbarController, FabController } from './components';
import Workout from '~/platform/workout'

interface AppState {
  navbarCtrl: NavbarController,
  fabCtrl: FabController,
  router: Router,
  workouts: Workout.Store,
  workoutBuilder: Workout.Builder,
}

export const state: Partial<AppState> = {
  navbarCtrl: new NavbarController(),
  fabCtrl: new FabController(),
  workoutBuilder: new Workout.Builder(),
}
export const AppContext = createContext<Partial<AppState>>(state)

export const useAppState = (): AppState => useContext(AppContext) as AppState

