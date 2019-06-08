import { Router, group } from "crayon";
import animate from 'crayon-animate'
import transition from 'crayon-transition'
import { Workout } from "~/platform/workout";
import { useMemo } from "preact/hooks";

export const useRoutes = (app: Router, currentWorkout: Workout) => {
    useMemo(() => {
        const g = group('/workouts/add', group => {
            group.use(transition.loader())
            group.use(animate.defaults({ duration: 300 }))
            group.use(animate.routes([
                { to:   '/workouts/add',          from: '/**', name: transition.pushUp   },
                { from: '/workouts/add',          to:   '/**', name: transition.popDown  },
                { to:   '/workouts/add/movement', from: '/**', name: transition.pushLeft },
                { from: '/workouts/add/movement', to:   '/**', name: transition.popRight },
                { to:   '/workouts/add/tags',     from: '/**', name: transition.pushLeft },
                { from: '/workouts/add/tags',     to:   '/**', name: transition.popRight },
                { to:   '/workouts/add/notes',    from: '/**', name: transition.pushLeft },
                { from: '/workouts/add/notes',    to:   '/**', name: transition.popRight },
                { to:   '/workouts/add/sets',     from: '/**', name: transition.pushLeft },
                { from: '/workouts/add/sets',     to:   '/**', name: transition.popRight }
            ]))
    
            group.path('/', async (req, res) => {
                const { WorkoutsAdd } = await import('~/gui/workouts/workouts-add/workouts-add')     
                return res.mount(WorkoutsAdd(app, currentWorkout))
            })
    
            group.path('/movement', async (req, res) => {
                const { WorkoutsAddMovement } = await import('~/gui/workouts/workouts-add-movement/workouts-add-movement')     
                return res.mount(WorkoutsAddMovement(app, currentWorkout))
            })
    
            group.path('/tags', async (req, res) => {
                const { WorkoutsAddTags } = await import('~/gui/workouts/workouts-add-tags/workouts-add-tags')     
                return res.mount(WorkoutsAddTags(app))
            })
    
            group.path('/notes', async (req, res) => {
                const { WorkoutsAddNotes } = await import('~/gui/workouts/workouts-add-notes/workouts-add-notes')     
                return res.mount(WorkoutsAddNotes(app))
            })
    
            group.path('/sets', async (req, res) => {
                const { WorkoutsAddSets } = await import('~/gui/workouts/workouts-add-sets/workouts-add-sets')     
                return res.mount(WorkoutsAddSets(app))
            })
        })
        app.use(g)
    }, [app, currentWorkout])
    
}
