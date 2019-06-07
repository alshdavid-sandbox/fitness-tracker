import './workouts.scss'
import { h } from 'preact';
import { useMemo } from 'preact/hooks';
import { useWorkoutRouter } from './state';
import { NavbarAction, FabAction } from '~/gui/shared/components';
import { Router } from 'crayon';

export const Workouts = (app: Router, navbar: NavbarAction, fab: FabAction) => () => {
    useMemo(() => navbar.set(<i className="far fa-search" />), [ navbar ])
    useMemo(() => {
        fab.set(<i className="far fa-plus" />)
        fab.setOnClick(() => () => app.navigate('/workouts/add'))
    }, [ fab, app ])

    const { setWorkoutRouter } = useWorkoutRouter()

    return <div 
        className="component-workouts"
        ref={setWorkoutRouter}>
    </div>
}