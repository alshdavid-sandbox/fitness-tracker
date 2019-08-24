import { useRouter } from '~/platform/use-router'
import * as Pages from '~/gui/pages'

export const useWorkoutRouter = () => {
  // console.log('1')

  const [workoutRouter, setWorkoutRouter] = useRouter((tabs) => {
    // console.log('2')
    tabs.path('/workouts/recent', (req, res) => 
      res.mount(Pages.WorkoutsRecent))
  
    tabs.path('/workouts/overview', (req, res) => {})
  })
  return { workoutRouter, setWorkoutRouter }
}