import animate from 'crayon-animate'
import transition from 'crayon-transition'
import { useRouter, routerFunc } from '~/platform/crayon/use-router'

const createWorkoutRouter: routerFunc = (tabs, selector) => {
    tabs.path('/workouts/recent', 
        async (req, res) => {
            const { Recent } = await import('~/gui/workouts/recent')
            return res.mount(Recent())
    })

    tabs.path('/workouts/overview', 
        async (req, res) => {
    })
}

export const useWorkoutRouter = () => {
    const [ workoutRouter, setWorkoutRouter ] = useRouter('workout-router', createWorkoutRouter)
    return { workoutRouter, setWorkoutRouter }
}