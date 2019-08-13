import transition from 'crayon-transition'

export const animations = [
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
]

export const tabAnimations = [
  { to:   '/workouts/recent', from: '/**', name: transition.slideRight },
  { from: '/workouts/recent', to:   '/**', name: transition.slideLeft },
  { to:   '/calories',        from: '/**', name: transition.slideLeft },
  { from: '/calories',        to:   '/**', name: transition.slideRight }
]

export const workoutAnimations = [
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
]