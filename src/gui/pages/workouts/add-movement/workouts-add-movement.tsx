import { h } from "preact";
import './workouts-add-movement.scss'
import { Router } from "crayon";
import { Workout } from "~/platform/workout";
import { useAppContext } from "~/gui/context";


export const WorkoutsAddMovement = () => {
    const { router } = useAppContext()
    const selectMovement = (selected: string) => {
        // workout.movement = selected
        router.back()
    }

    return <div className="component-workouts-add-movement">
        <div className="search-panel">
            <input
                type="text" 
                placeholder="Search Movements" />
        </div>
        <div 
            className="item"
            onClick={() => selectMovement('Bench Press')}>
            Bench Press
        </div>
    </div>
}