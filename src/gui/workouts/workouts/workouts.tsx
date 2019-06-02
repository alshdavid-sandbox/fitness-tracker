import './workouts.scss'
import { h } from 'preact';
import { useWorkoutRouter } from './state';

export const Workouts = () => () => {
    const { setWorkoutRouter } = useWorkoutRouter()

    return <div 
        className="component-workouts"
        ref={setWorkoutRouter}>
    </div>
}