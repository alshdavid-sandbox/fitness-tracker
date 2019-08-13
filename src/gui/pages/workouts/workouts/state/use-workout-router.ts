import { useRouter } from '~/platform/use-router'
import * as Pages from '~/gui/pages'

export const useWorkoutRouter = () => {
  const [workoutRouter, setWorkoutRouter] = useRouter('workout-router', (tabs, selector) => {
    tabs.path('/workouts/recent', (req, res) => 
      res.mount(Pages.WorkoutsRecent()))
  
    tabs.path('/workouts/overview', (req, res) => {})
  })
  return { workoutRouter, setWorkoutRouter }
}